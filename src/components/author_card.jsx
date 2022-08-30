import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AuthorCard = (props) => {
    return (
        <Card className='m-4' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.author.name}</Card.Title>
                <Card.Text>
                    <div>
                        <b>Address: </b>{props.author.name}
                    </div>
                    <div>
                        <b>Age: </b>{props.author.age}
                    </div>
                    <div>
                        <b>Gender: </b>{props.author.gender}
                    </div>
                </Card.Text>
                <Button className='btn btn-success'>Show more</Button>
            </Card.Body>
        </Card>
    )
}

export default AuthorCard;