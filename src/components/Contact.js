import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {

  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <div className="name">{props.name}</div>
        <div className="status">
          <span className={props.online ? "status-online" : "status-offline"} />
          <span className="status-text">{props.online ? "Online" : "Offline"}</span>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
}

export default Contact;