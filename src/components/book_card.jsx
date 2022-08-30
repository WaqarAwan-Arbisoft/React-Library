import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const BookCard = (props) => {
    return (
        <>
            <Card className='m-4' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.book.image} style={{ height: '400px' }} />
                <Card.Body>
                    <Card.Title>{props.book.name}</Card.Title>
                    <Card.Text>
                        <div>
                            <b>Published By: </b>{props.book.author.name}
                        </div>
                    </Card.Text>
                    <Button className='btn btn-success'>Show Details</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default BookCard;