const AddAuthor=()=>{
    const addAuthorSubmitHandler=(e)=>{
        e.preventDefault();
        console.log("submitted")
    }
    return (
    <div className="container rounded-2xl">
        <h1 className="m-3 text-center">Add New Author</h1>
        <div class="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={addAuthorSubmitHandler} >
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-6 w-full">
                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" name="name" id="name" class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="The great gatsby"/>
                        </div>
                    </div>
                    </div>

                    <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-6 w-full">
                        <label for="author-name" class="block text-sm font-medium text-gray-700">Author Name</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" name="author-name" id="author-name" class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="Adams"/>
                        </div>
                    </div>
                    </div>


                    <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-6 w-full">
                        <label for="publishDate" class="block text-sm font-medium text-gray-700">Publish Date</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="date" name="publishDate" id="publishDate" class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                        </div>
                    </div>
                    </div>


                    <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-6 w-full">
                        <label for="noOfPages" class="block text-sm font-medium text-gray-700">Number of Pages</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="number" name="noOfPages" id="noOfPages" class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="200" />
                        </div>
                    </div>
                    </div>

                    
                    <div>
                    <label class="block text-sm font-medium text-gray-700">Book Cover Image</label>
                    <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div class="space-y-1 text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                            <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                            </label>
                            <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs text-gray-500">Image file</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add</button>
                </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default AddAuthor;