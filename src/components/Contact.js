import React from "react";
import "./Contact.css";

function Contact() {
  const avatar = "https://randomuser.me/api/portraits/women/32.jpg";
  const name = "Caroline Young";
  const online = true;

  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="avatar" />
      <div>
        <div className="name">{name}</div>
        <div className="status">
          <span className={online ? "status-online" : "status-offline"} />
          <span className="status-text">{online ? "Online" : "Offline"}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;