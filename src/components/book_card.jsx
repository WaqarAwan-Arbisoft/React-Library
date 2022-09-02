import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const BookCard = (props) => {
    const [authorName, setAuthorName] = useState("");
    return (
        <>
            <Card className='m-4' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.book.image} style={{ height: '400px' }} />
                <Card.Body>
                    <Card.Title>{props.book.name}</Card.Title>
                    <Card.Text>
                        <b>Published By: </b>{props.book.author.name}<br></br>
                    </Card.Text>
                    <Link to={'' + props.book.pk} className='btn btn-success'>Show Details</Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default BookCard;