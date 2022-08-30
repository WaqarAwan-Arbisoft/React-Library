import { useEffect, useState } from "react";
import AuthorCard from "../components/author_card";

const Author = () => {
    const [authorsList, setAuthorsList] = useState([])
    useEffect(() => {
        const fetchAllAuthors = async () => {
            let response = await fetch(`${process.env.REACT_APP_DOMAIN}/authors/`);
            if (response.ok) {
                let respData = await response.json();
                setAuthorsList([...respData])
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
            <h1 className="text-center p-3">Authors List</h1>
            <div className="container d-flex">
                {authorsList.map((author, index) => (
                    <AuthorCard key={index} author={author} />
                ))}
            </div>
        </>
    )
}

export default Author;