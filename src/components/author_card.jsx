import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AuthorCard = (props) => {
    return (
        <Card className='m-4 p-3' style={{ width: '18rem' }}>
            <Card.Title>{props.author.name}</Card.Title>
            <Card.Body className='ps-0'>

                <div>
                    <b>Address: </b>{props.author.name}
                </div>
                <div>
                    <b>Age: </b>{props.author.age}
                </div>
                <div>
                    <b>Gender: </b>{props.author.gender}
                </div>

            </Card.Body>
            <Button className='btn btn-success'>Show more</Button>
        </Card>
    )
}

export default AuthorCard;