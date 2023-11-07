import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PropTypes from 'prop-types';

function TapElement({ categories }) {
    if (!categories) {
        categories = []; // Initialize categories as an empty array if it's undefined
    }

    return (
        <Tabs defaultActiveKey="all" id="category-tabs" className="mb-3">
            <Tab eventKey="all" title="All">
                Click on the desired category tab to view cards corresponding to
                that category. Currently no registered categories.
            </Tab>
            {categories.map((category) => (
                <Tab
                    key={category.id}
                    eventKey={category.id}
                    title={category.name}
                >
                    Tab content for {category.name}
                </Tab>
            ))}
        </Tabs>
    );
}

TapElement.propTypes = {
    categories: PropTypes.array.isRequired, // categories should be an array
};

export default TapElement;
