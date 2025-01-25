import React from 'react';
import Category from './Category';
import SideNavBar from './SideNavBar';

const Evaluation = ({role}) => {

  return (
    <div className="evaluation">
      <SideNavBar role={role} />
      <p>Title</p>
      {/* Tabs */}
      {/* Content */}
      {/* <div className="category-content">
        <Category categoryName={activeTab} role={role}/>
      </div> */}
    </div>
  );
};

export default Evaluation;
