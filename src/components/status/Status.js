import { Avatar } from "@material-ui/core";
import React from "react";
import "./Status.css";

function Status(p) {
  return (
    <div className="statuslist" onClick={() => p?.handleClickOpen()}>
      <Avatar src={p?.profile.profilepic} />
      <div className="name">
        <h2>{p?.profile.name}</h2>
        <p>{p?.profile.date}</p>
      </div>
      <div className="seen">
        <p>{p.profile.status}</p>
      </div>
    </div>
  );
}

export default Status;
