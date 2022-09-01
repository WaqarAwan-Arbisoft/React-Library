import { useState } from "react";
import Form from 'react-bootstrap/Form';
import AlertMessage from "../components/alertMessage";

const AddAuthor = () => {
    const [authorName, setAuthorName] = useState("")
    const [address, setAddress] = useState("")
    const [gender, setGender] = useState("M")
    const [age, setAge] = useState(25)
    const [error, setError] = useState({ status: false, message: "" })
    const [success, setSuccess] = useState({ status: false, message: "" })
    const addAuthorSubmitHandler = async () => {
        const response = await fetch("http://localhost:8000/authors/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": authorName,
                "address": address,
                "gender": gender,
                "age": age
            })
        })
        let respData;
        if (response.ok) {
            respData = await response.json();
            setError({ ...error, status: false })
            setSuccess({ status: true, message: "Successfully added the author" })
            setAuthorName("")
            setAddress("")
            setAge(25)
        }
        else {
            console.log("An error occured")
        }
    }
    const nameChangeHandler = (e) => {
        console.log(e.target.value);
        setAuthorName(e.target.value);
    }
    const addressChangeHandler = (e) => {
        setAddress(e.target.value);
    }
    const genderChangeHandler = (e) => {
        setGender(e.target.value);
    }
    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    }

    return (
        <div className="container rounded-2xl">
            <h1 className="m-3 text-center">Add New Author</h1>
            <div class="mt-5 md:col-span-2 md:mt-0">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                    {error.status ? (
                        <AlertMessage error={true} message={error.message} />
                    ) : ''}
                    {success.status ? (
                        <AlertMessage error={false} message={success.message} />
                    ) : ''}
                    <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <div class="grid grid-cols-3 gap-6">
                            <div class="col-span-6 w-full">
                                <label for="name" class="block text-sm font-medium text-gray-700">Author name</label>
                                <div class="mt-1 flex rounded-md shadow-sm">
                                    <input type="text" name="name" id="name" class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="Adams" value={authorName} onChange={nameChangeHandler} />
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-3 gap-6">
                            <div class="col-span-6 w-full">
                                <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                                <div class="mt-1 flex rounded-md shadow-sm">
                                    <input type="text" name="address" id="address" class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" value={address} placeholder="22nd Street New York" onChange={addressChangeHandler} />
                                </div>
                            </div>
                        </div>


                        <div class="grid grid-cols-3 gap-6">
                            <div class="col-span-6 w-full">
                                <Form.Select size="lg" onChange={genderChangeHandler}>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </Form.Select>
                            </div>
                        </div>


                        <div class="grid grid-cols-3 gap-6">
                            <div class="col-span-6 w-full">
                                <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
                                <div class="mt-1 flex rounded-md shadow-sm">
                                    <input type="number" name="age" id="age" class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="25" value={age} onChange={ageChangeHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button type="button" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={addAuthorSubmitHandler}>Add</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddAuthor;