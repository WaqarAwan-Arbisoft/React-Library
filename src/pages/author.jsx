import { useEffect, useState } from "react";
import AuthorCard from "../components/author_card";
import SearchField from "../UI/searchField";

const Author = () => {
    const [authorsList, setAuthorsList] = useState([])
    useEffect(() => {
        const fetchAllAuthors = async () => {
            let response = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/authors/`);
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
    const searchAuthorHandler = async (e) => {
        try {
            let response = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/authors/?search=${e.target.value}`)
            if (response.ok) {
                let respData = await response.json();
                setAuthorsList([...respData])
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <h1 className="text-center p-3">Authors List</h1>
            <div className="container">
                <SearchField placeholder="Search Author here..." onChange={searchAuthorHandler} />
            </div>
            <div className="container mx-auto d-flex flex-wrap">
                {authorsList.length == 0 ? (
                    <h1 className="text-center p-3">No Author Added yet</h1>
                ) : ''}
                {authorsList.map((author, index) => (
                    <AuthorCard key={index} author={author} />
                ))}
            </div>
        </>
    )
}

export default Author;