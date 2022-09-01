import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const BookCard = (props) => {
    const [authorName, setAuthorName] = useState("");
    useEffect(() => {
        const fetchAllAuthors = async () => {
            console.log(`http://localhost:8000/authors/${props.book.author}`)
            let response = await fetch(`http://localhost:8000/authors/${props.book.author}`);
            if (response.ok) {
                let respData = await response.json();
                setAuthorName(respData.name)
            }
        }
        try {
            fetchAllAuthors();
        }
        catch (err) {
            console.log(err)
        }
    }, [])
    return (
        <>
            <Card className='m-4' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.book.image} style={{ height: '400px' }} />
                <Card.Body>
                    <Card.Title>{props.book.name}</Card.Title>
                    <Card.Text>
                        <b>Published By: </b>{authorName}<br></br>
                    </Card.Text>
                    <Button className='btn btn-success'>Show Details</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default BookCard;