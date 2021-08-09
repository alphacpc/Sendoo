import React from 'react';
import DashboardSlideBar from './../components/DashboardSlideBar';
import DashboardNavbar from './../components/DashboardNavbar';

import BlocStyleDashboard from './../Styles';

const WritePost = () => {
    return (
        <div>
             <DashboardNavbar/>
            
            <div style={BlocStyleDashboard.SlideAndContent}>
                
                <DashboardSlideBar />
                
                <div style={BlocStyleDashboard.Content}>
                    <h1>Ecrire un article</h1>
                </div>

            </div>
        </div>
    )
}

export default WritePost;
