import { useEffect } from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import AlertMessage from "../components/alertMessage";

const AddBook = () => {
    const [authorsList, setAuthorsList] = useState([])
    const [listLoaded, setListLoaded] = useState(false)
    const [bookName, setBookName] = useState("")
    const [authorSelected, setAuthorSelected] = useState();
    const [noOfPages, setNoOfPages] = useState(1);
    const [profileImage, setProfileImage] = useState(undefined);
    const [error, setError] = useState({ status: false, message: "" })
    const [success, setSuccess] = useState({ status: false, message: "" })

    useEffect(() => {
        const fetchAuthorList = async () => {
            let response = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/authors/`)
            let respData;
            if (response.ok) {
                respData = await response.json();
                if (respData.length > 0) {
                    setAuthorSelected(respData[0].pk)
                }
                setAuthorsList([...respData])
                setListLoaded(true)
            }
        }
        try {
            fetchAuthorList();
        }
        catch (err) {
            console.log(err)
        }
    }, [])

    const addBookSubmitHandler = async () => {
        let formData = new FormData();
        formData.append('name', bookName)
        formData.append('author', authorSelected)
        formData.append('publishDate', new Date().toISOString())
        formData.append('NoOfPages', noOfPages)
        formData.append('image', profileImage)
        const response = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/books`, {
            method: "POST",
            body: formData
        })
        let respData;
        if (response.ok) {
            respData = await response.json();
            setError({ ...error, status: false })
            setSuccess({ status: true, message: "Successfully added the book" })
            setBookName("");
            setNoOfPages(1);
            setProfileImage(undefined);
        }
        else {
            setError({ status: true, message: "Please fill out the form properly" })
            setSuccess({ ...success, status: false })
        }
    }
    const bookNameChangeHandler = (e) => {
        setBookName(e.target.value);
    }
    const authorOnChangeHandler = (e) => {
        setAuthorSelected(e.target.value);
    }
    const noOfPagesChangeHandler = (e) => {
        setNoOfPages(e.target.value)
    }
    const profileChangeHandler = (e) => {
        setProfileImage(e.target.files[0])
    }
    return (
        <div className="container rounded-2xl">
            <h1 className="m-3 text-center">Add New Book</h1>
            <div className="mt-5 md:col-span-2 md:mt-0">

                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    {error.status ? (
                        <AlertMessage error={true} message={error.message} />
                    ) : ''}
                    {success.status ? (
                        <AlertMessage error={false} message={success.message} />
                    ) : ''}
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-6 w-full">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <input type="text" name="name" id="name" className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="The great gatsby" onChange={bookNameChangeHandler} value={bookName} />
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-6 w-full">
                                <Form.Select size="lg" onChange={authorOnChangeHandler}>
                                    {listLoaded && authorsList.map((author, index) => (
                                        <option value={author.pk} key={index}>{author.name}</option>
                                    ))}
                                </Form.Select>
                                <small>Please add the <Link to="/add-author">author name </Link>if it is not listed here.</small>
                            </div>

                        </div>


                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-6 w-full">
                                <label htmlFor="noOfPages" className="block text-sm font-medium text-gray-700">Number of Pages</label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <input type="number" name="noOfPages" id="noOfPages" className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="200" value={noOfPages} onChange={noOfPagesChangeHandler} />
                                </div>
                            </div>
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700">Book Cover Image</label>
                            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={profileChangeHandler} value={profileImage} />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Image file</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={addBookSubmitHandler}>Add</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddBook;