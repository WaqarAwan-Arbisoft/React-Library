import { useEffect, useState } from "react";
import BookCard from "../components/book_card";
import SearchField from "../UI/searchField";

const Books = () => {
    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        const fetchBooksData = async () => {
            let response = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/books`)
            if (response.ok) {
                let respData = await response.json();
                setBookList([...respData])
            }
        }
        try {
            fetchBooksData();
        }
        catch (err) {
            console.log(err)
        }

    }, []);
    const searchBookHandler = async (e) => {
        try {
            let response = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/books?search=${e.target.value}`)
            if (response.ok) {
                let respData = await response.json();
                setBookList([...respData])
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <h1 className="text-center p-4">Book Lists</h1>
            <div className="container">
                <SearchField placeholder="Search Book here..." onChange={searchBookHandler} />
            </div>
            {bookList.length == 0 ? (
                <h1 className="text-center p-3">No Books Added yet</h1>
            ) : ''}
            <div className="container d-flex">

                {bookList.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </>
    )
}


export default Books;