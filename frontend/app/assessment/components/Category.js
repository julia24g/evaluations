"use client";
import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Questions from "./Questions";
import clsx from "clsx";

const Category = ({ categoryName }) => {
  const tabNames = ["Questions", "Comments"];

  return (
    <div className="flex-grow-1 p-3">
      <h2 className="text-xl font-semibold mb-4">{categoryName}</h2>

      <TabGroup>
        <TabList className="flex space-x-1 rounded-lg bg-gray-100 p-1">
          {tabNames.map((tab) => (
            <Tab key={tab} className={({ selected }) => 
              clsx(
                "w-full py-2 text-sm font-medium leading-5 text-gray-700 rounded-lg",
                selected ? "bg-white shadow" : "hover:bg-gray-200"
              )
            }>
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels className="mt-4">
          <TabPanel>
            <Questions categoryName={categoryName} />
          </TabPanel>
          <TabPanel>
            <p>Comments section coming soon!</p>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default Category;
