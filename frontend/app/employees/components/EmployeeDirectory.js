"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
import { useRouter } from "next/navigation";
import SingleEmployee from './SingleEmployee';
import NavBar from '../../utils/NavBar';

const EmployeeDirectory = () => {
  const { state, dispatch } = useUser();
  const router = useRouter();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    dispatch({
      type: "SET_USER_INFO",
      payload: { userId: 5, role: "Software Engineer", individualContributor: false },
    });
  }, [dispatch]);

  useEffect(() => {
    const fetchEmployees = async () => {
      if (!state.userInfo?.userId) return;
      setLoading(true);
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/employees`, {
          params: { userId: state.userInfo.userId },
        });
        setEmployees(data);
      } catch (error) {
        setError(error.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, [state.userInfo?.userId]);

  const openEmployee = async (level) => {
    if (!state.userInfo?.userId) return;
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/assessments`, {
        userId: state.userInfo.userId,
        level: level,
      });
      dispatch({ type: "SET_ASSESSMENT_INFO", payload: { "id": data.assessmentid, "status": "In Progress" }});
      router.push(`/assessment`);
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
    <NavBar/>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="font-semibold text-gray-900 sm:text-3xl">Employees</h1>
        <p className="mt-2 text-gray-600">This is an app for PCC performance evaluations.</p>

        <ul role="list" className="divide-y divide-gray-100">
          {employees.map(({ userid, firstname, lastname, managerfirstname, managerlastname }) => (
            <SingleEmployee
              key={userid}
              userid={userid}
              firstname={firstname}
              lastname={lastname}
              managerfirstname={managerfirstname}
              managerlastname={managerlastname}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default EmployeeDirectory;
