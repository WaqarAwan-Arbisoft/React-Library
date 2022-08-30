import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AuthorCard=()=>{
    return(
        <Card className='m-4' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button className='btn btn-success'>Show more</Button>
                </Card.Body>
            </Card>
    )
}

export default AuthorCard;