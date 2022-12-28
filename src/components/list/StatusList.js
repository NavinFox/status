import { Avatar, IconButton } from "@material-ui/core";
import { ChatOutlined, DonutLargeOutlined, MoreVert } from "@material-ui/icons";
import Status from "../status/Status";
import React, { useState } from "react";
import "./StatusList.css";
import CarouselModel from "../slider/Popup";

function StatusList() {
  const [open, setOpen] = React.useState(false);
  console.log("open", open);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let profiledata = [
    {
      name: "Raaj",
      profilepic:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Toady at 6:49am",
      status: "now",
      images: {
        url1: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600",
        url2: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
        url3: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    },
    {
      name: "Shivu",
      profilepic:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Toady at 6:49am",
      status: "today",
      images: {
        url1: "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=600",
        url2: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600",
        url3: "https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    },
    {
      name: "Naveen",
      profilepic:
        "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Toady at 4:00am",
      status: "today",
      images: {
        url1: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
        url2: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600",
        url3: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    },
    {
      name: "Ramesh",
      profilepic:
        "https://media.istockphoto.com/photos/side-view-longbeard-business-man-portrait-picture-id1074638206?b=1&k=20&m=1074638206&s=612x612&w=0&h=tKgrzMs5d2psWpIU8yIiVDsVWsmGuIPbxU8VKSrU4AI=",
      date: "Yesterday at 11:49pm",
      status: "seen",
      images: {
        url1: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600",
        url2: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
        url3: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    },
    {
      name: "Akash",
      profilepic:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Yesterday at 8:00pm",
      status: "seen",
      images: {
        url1: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600",
        url2: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600",
        url3: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    },
    {
      name: "Arun",
      profilepic:
        "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Yesterday at 7:46pm",
      status: "seen",
      images: {
        url1: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600",
        url2: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600",
        url3: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    },
    {
      name: "Diana",
      profilepic:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Toady at 6:49am",
      status: "now",
      images: {
        url1: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600",
        url2: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
        url3: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    },
    {
      name: "Jack",
      profilepic:
        "https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Toady at 4:00am",
      status: "today",
      images: {
        url1: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
        url2: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600",
        url3: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    },
    {
      name: "Maichel",
      profilepic:
        "https://images.pexels.com/photos/5486199/pexels-photo-5486199.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Yesterday at 11:49pm",
      status: "seen",
      images: {
        url1: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600",
        url2: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
        url3: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    },
    
  ];

  const [selected, setSelected] = useState();
  console.log("selected", selected);

  return (
    <div className="list">
      <div className="header">
        <IconButton>
          <Avatar src="https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </IconButton>
        <div className="headeright">
          <IconButton>
            <DonutLargeOutlined />
          </IconButton>
          <IconButton>
            <ChatOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <hr />
      <div className="status">
        <div className="heading">
          <h1>Status</h1>
        </div>
        {profiledata?.map((item) => {
          return (
            <div onClick={() => setSelected(item.images)}>
              <Status handleClickOpen={handleClickOpen} profile={item} />
            </div>
          );
        })}
      </div>
      {open && (
        <CarouselModel
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          selected={selected}
        />
      )}
    </div>
  );
}



export default StatusList;
