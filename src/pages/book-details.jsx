import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const BookDetails = () => {
    let id = useParams().id;
    const [book, setBook] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const fetchBook = async () => {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/books/${id}`);
            let respData;
            if (response.ok) {
                respData = await response.json()
                let date = new Date(respData.publishDate)
                const timestampWithOffset = date.getTime();
                const dateWithOffset = new Date(timestampWithOffset).toString()
                setBook({ ...respData, publishDate: dateWithOffset });
                setIsLoaded(true);
            }
            else {
                console.log("An error occured");
            }
        }
        try {
            fetchBook();
        }
        catch (err) {
            console.log(err);
        }
    }, [])
    return (
        <>
            {isLoaded && (
                <div className="container mx-auto text-center">
                    <div className="d-flex justify-content-center">
                        <img className="m-3" src={book.image} alt="BOOK_IMAGE" height={250} />
                    </div>
                    <h1>{book.name}</h1>
                    <div>Publish Date: <b>{book.publishDate}</b></div>
                    <div>Written by: <b>{book.author.name}</b></div>
                    <div>Written by: <b>{book.NoOfPages}</b></div>
                </div>
            )}
        </>
    )
}

export default BookDetails;