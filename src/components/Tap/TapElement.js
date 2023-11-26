// TapElement.js
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../App/App.css';

function TapElement() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 tab_container"
        >
            <Tab className="tab_container" eventKey="all" title="All">
                Tab content for Home
            </Tab>
            <Tab eventKey="study1" title="Study1">
                Tab content for Profile
            </Tab>
            <Tab eventKey="study2" title="Study2">
                Tab content for Contact
            </Tab>
        </Tabs>
    );
}

export default TapElement;
