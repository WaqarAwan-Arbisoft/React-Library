const AlertMessage = (props) => {
    return (
        <div class={(props.error ? "bg-red-100 border border-red-400 text-red-700" : "bg-teal-100 border border-teal-400 text-teal-700") + " m-3 px-4 py-3 rounded relative"} role="alert">
            <strong class="font-bold">{props.error ? "Error! " : "Success! "}</strong>
            <span class="block sm:inline">{props.message}</span>
        </div>
    );
}

export default AlertMessage;