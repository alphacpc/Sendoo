import React from "react";
import DashboardSlideBar from "./../components/DashboardSlideBar";
import DashboardNavbar from "./../components/DashboardNavbar";

import BlocStyleDashboard from "./../Styles";

import MyPostsListResult from "./../components/MyPosts/MyPostsListResult";
import MyPostsToolbar from "./../components/MyPosts/MyPostsToolbar";

import customers from "./../PostLists";
import { Box } from "@material-ui/core";

const MyPosts = () => {
  return (
    <div>
      <DashboardNavbar />

      <div style={BlocStyleDashboard.SlideAndContent}>
        <DashboardSlideBar />

        <div style={BlocStyleDashboard.Content}>
          <Box
            sx={{
              backgroundColor: "background.default",
              minHeight: "100%",
              py: 3,
            }}
          >
            <MyPostsToolbar />
            <Box sx={{ pt: 3 }}>
              <MyPostsListResult customers={customers} />
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
