import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function StudyCards() {
    return (
        <>
            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card.
                    </Card.Text>
                    <Button variant="outline-warning">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card.
                    </Card.Text>
                    <Button variant="outline-warning">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default StudyCards;
