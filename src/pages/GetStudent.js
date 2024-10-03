import {useState} from "react";
import {Link} from "react-router-dom";
import OutputContainer from "../components/OutputContainer";
import {GetCall} from "../api/ApiCalls";

function GetStudent() {
    // Initialize state for four inputs
    const [inputValues, setInputValues] = useState({
        name: "",      // Activity Name
        domain: "",    // Activity Domain
        description: "",// Activity Description
        date: "",      // Event Date
    });
    const [errMessage, setErrMessage] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [output, setOutput] = useState({
        name: "", 
        domain: "", 
        description: "", 
        date: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        // Update only the input that changed
        setInputValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));

        // Clear previous messages
        setOutput({name: "", domain: "", description: "", date: ""});
        setResponseMessage("");
        setErrMessage("");
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setErrMessage("");
        setResponseMessage("");

        // You can add validation logic here if necessary

        try {
            const response = await GetCall(inputValues);
            setResponseMessage("Activity successfully added to the database");
            setOutput({
                name: response.data.name,
                domain: response.data.domain,
                description: response.data.description,
                date: response.data.date
            });
        } catch (err) {
            if (err.response) {
                setResponseMessage(err.response.data.message);
            } else {
                setResponseMessage(`Error: ${err.message}`);
            }
        } finally {
            // Clear the form inputs
            setInputValues({
                name: "",
                domain: "",
                description: "",
                date: ""
            });
        }
    }

    return (
        <div className={"centered-element"}>
            <img className="student-img" src={"https://cdn-icons-png.flaticon.com/512/5349/5349022.png"} width={"100px"} alt={"student-logo"}/>
            <div className="student-container">
                <h1>Add Events</h1>
                <br/>
                <form onSubmit={handleSubmit}>
                    {/* Input for Activity Name */}
                    <input 
                        onChange={handleChange} 
                        value={inputValues.name} 
                        id="name" 
                        name="name" 
                        placeholder="Enter Activity Name"
                    />
                    <br/>

                    {/* Input for Activity Domain */}
                    <input 
                        onChange={handleChange} 
                        value={inputValues.domain} 
                        id="domain" 
                        name="domain" 
                        placeholder="Enter Activity Domain"
                    />
                    <br/>

                    {/* Input for Activity Description */}
                    <input 
                        onChange={handleChange} 
                        value={inputValues.description} 
                        id="description" 
                        name="description" 
                        placeholder="Enter Activity Description"
                    />
                    <br/>

                    {/* Input for Event Date */}
                    <input 
                        onChange={handleChange} 
                        value={inputValues.date} 
                        id="date" 
                        name="date" 
                        placeholder="Enter Event Date (DD-MM-YYYY)"
                    />
                    <br/>

                    <h5>{errMessage}&nbsp;</h5>
                    <br/>
                    <button type={"submit"}>Add Activity</button>
                    <Link className={"back-link"} to='/dashboard'>Back</Link>
                </form>
                {/* Display the response message */}
                <br/>
                <h4>{responseMessage}</h4>
            </div>
        </div>
    );
}

export default GetStudent;
