import React from 'react';
import PropTypes from 'prop-types';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TapElement({ categories, onCategorySelect }) {
    if (!categories) {
        categories = [];
    }

    return (
        <Tabs
            defaultActiveKey="all"
            id="category-tabs"
            className="mb-3"
            onSelect={onCategorySelect}
        >
            <Tab eventKey="all" title="All">
                Click on the desired category tab to view cards corresponding to
                that category.
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
    onCategorySelect: PropTypes.func.isRequired, // Add prop validation for category selection
};

export default TapElement;
