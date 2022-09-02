const AlertMessage = (props) => {
    return (
        <div className={(props.error ? "bg-red-100 border border-red-400 text-red-700" : "bg-teal-100 border border-teal-400 text-teal-700") + " m-3 px-4 py-3 rounded relative"} role="alert">
            <strong className="font-bold">{props.error ? "Error! " : "Success! "}</strong>
            <span className="block sm:inline">{props.message}</span>
        </div>
    );
}

export default AlertMessage;