import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function Stacks({ categories, selectedCategory }) {
    let filteredCategories = [];
    let stacks = [];

    if (selectedCategory === 'all') {
        filteredCategories = categories;
    } else {
        filteredCategories = categories.filter(
            (category) => category._id === selectedCategory
        );
    }

    const combineStacks = (dataArray) => {
        let combinedStacks = [];
        dataArray.forEach((item) => {
            if (item.length !== 0) {
                combinedStacks = combinedStacks.concat(item.stacks);
            }
        });
        return combinedStacks;
    };

    stacks =
        selectedCategory === 'all'
            ? combineStacks(filteredCategories)
            : filteredCategories[0].stacks;

    return (
        <div className="row">
            {stacks.map((stack) => (
                <div key={stack._id} className="col-sm-12 col-md-6">
                    <Card className="m-3 shadow">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>
                                <strong>{stack.title}</strong>
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card.
                            </Card.Text>
                            <Button
                                variant="outline-warning"
                                className="start-studying-button"
                                style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    right: '8px',
                                    margin: '6px',
                                }}
                            >
                                Start Studying!
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}

Stacks.propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategory: PropTypes.string.isRequired,
};

export default Stacks;
