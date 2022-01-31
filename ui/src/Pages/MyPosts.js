import React, {useContext, useEffect, useState} from "react";
import axios from "axios";

import DashboardSlideBar from "./../components/DashboardSlideBar";
import DashboardNavbar from "./../components/DashboardNavbar";

import { Context } from "./../context/Context"

import BlocStyleDashboard from "./../Styles";

import MyPostsListResult from "./../components/MyPosts/MyPostsListResult";
import MyPostsToolbar from "./../components/MyPosts/MyPostsToolbar";

import customers from "./../PostLists";
import { Box } from "@material-ui/core";

const MyPosts = () => {

  const { user } = useContext(Context);
  const [posts, setPosts] = useState([]),

  fetchAllPostUser = async ()=>{
    try{
      const res = await axios.get(`posts?user=${user.userName}`);
      console.log(res.data)
      setPosts(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchAllPostUser();
  }, [])

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
              <MyPostsListResult customers={customers} posts={posts} />
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
