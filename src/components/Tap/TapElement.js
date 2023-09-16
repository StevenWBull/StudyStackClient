import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TapElement() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="all" title="All">
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
