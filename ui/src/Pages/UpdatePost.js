import React from "react";
import DashboardSlideBar from "./../components/DashboardSlideBar";
import DashboardNavbar from "./../components/DashboardNavbar";

import BlocStyleDashboard from "./../Styles";
const UpdatePost = () => {
  return (
    <div>
      <DashboardNavbar />

      <div style={BlocStyleDashboard.SlideAndContent}>
        <DashboardSlideBar />

        <div style={BlocStyleDashboard.Content}>
          <h1>Modifier un article</h1>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
