import React from 'react';
import './Contact.css'

function Contact() {

    const avatar = "https://randomuser.me/api/portraits/women/32.jpg";
    const name = "Caroline Young";
    const online = true;

    return <div className="Contact">
        <img className="avatar" src="https://randomuser.me/api/portraits/women/32.jpg"/>
        <div>
            <div className="name">Caroline Young</div>
            <div className="status">
                <span className={online ? 'status-online' : 'status-offline'}></span>
                <span className="status-text">{online ? 'Online' : 'Offline'}</span>
            </div>
        </div>
    </div>;
}

export default Contact;