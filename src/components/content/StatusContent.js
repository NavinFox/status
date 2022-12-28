
import { Avatar } from "@material-ui/core";
import { RemoveRedEyeOutlined } from "@material-ui/icons";
import React from "react";
import "./StatusContent.css";

function StatusContent() {
  return (
    
    <div className='content' >
        <h1>View your status</h1>
        <Avatar src='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600' />
        
        <RemoveRedEyeOutlined/> 
        <p>98 Views</p>
        
        <p>Yesterday at 7:46pm</p>
        </div>
     
    
  );
}

export default StatusContent;
