import {Link} from "react-router-dom";

function Home() {
    return (
        <div className={"centered-element"}>
            <div className={"student-container"}>
                <h1>Student Management System Dashboard</h1>
                <br/><br/>
                <img src={"/sdp-react/images/dashboard-logo.png"} width={"400px"} alt={"dashboard-logo"}/>
                <br/><br/>
                <Link className={"back-link"} to='/dashboard/submit'>Add Student</Link>
                <Link className={"back-link"} to='/dashboard/get'>Add events</Link>
                <Link className={"back-link"} to='/dashboard/update'>Update Student Details</Link>
                <Link className={"back-link"} to='/dashboard/delete'>Delete Student</Link>
            </div>
        </div>
    );
}

export default Home;