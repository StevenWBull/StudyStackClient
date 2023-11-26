import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function StudyCards() {
    return (
        <>
            {/* On mobile, use col-sm-12 to take full width; On desktop, use col-md-6 to take half width */}
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <Card className="m-3 shadow">
                        <Card.Body>
                            <Card.Title>
                                <strong>Card Title</strong>
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card.
                            </Card.Text>
                            <Button
                                variant="outline-warning"
                                className="start-studying-button"
                                style={{
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

                {/* Add more cards in the same format */}
                <div className="col-sm-12 col-md-6">
                    <Card className="m-3 shadow">
                        <Card.Body>
                            <Card.Title>
                                <strong>Card Title</strong>
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card.
                            </Card.Text>
                            <Button
                                variant="outline-warning"
                                className="start-studying-button"
                                style={{
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

                {/* Additional card 1 */}
                <div className="col-sm-12 col-md-6">
                    <Card className="m-3 shadow">
                        <Card.Body>
                            <Card.Title>
                                <strong>Card Title</strong>
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card.
                            </Card.Text>
                            <Button
                                variant="outline-warning"
                                className="start-studying-button"
                                style={{
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

                {/* Additional card 2 */}
                <div className="col-sm-12 col-md-6 mb-12">
                    <Card className="m-3 shadow">
                        <Card.Body>
                            <Card.Title>
                                <strong>Card Title</strong>
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card.
                            </Card.Text>
                            <Button
                                variant="outline-warning"
                                className="start-studying-button"
                                style={{
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
            </div>
        </>
    );
}

export default StudyCards;
