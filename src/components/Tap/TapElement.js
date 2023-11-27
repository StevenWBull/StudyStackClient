import React from 'react';
import PropTypes from 'prop-types';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TapElement({ categories }) {
    // Initialize categories as an empty array if it's undefined
    if (!categories) {
        categories = [];
    }

    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 tab_container"
        >
            <Tab className="tab_container" eventKey="all" title="All">
                Click on the desired category tab to view cards corresponding to
                that category. Currently no registered categories.
            </Tab>
            {categories.map((category) => (
                <Tab
                    key={category._id}
                    eventKey={category._id}
                    title={category.title}
                >
                    Tab content for {category.title}
                </Tab>
            ))}
        </Tabs>
    );
}

TapElement.propTypes = {
    categories: PropTypes.array.isRequired, // categories should be an array
};

export default TapElement;
