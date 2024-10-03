import {HashRouter as Router, Route, Routes} from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import SubmitStudent from "./pages/SubmitStudent";
import GetStudent from "./pages/GetStudent";
import UpdateStudent from "./pages/UpdateStudent";
import DeleteStudent from "./pages/DeleteStudent";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"dashboard"} element={<SharedLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"submit"} element={<SubmitStudent/>}/>
                    <Route path={"get"} element={<GetStudent/>}/>
                    <Route path={"update"} element={<UpdateStudent/>}/>
                    <Route path={"delete"} element={<DeleteStudent/>}/>
                </Route>
            </Routes>
        </Router>
    );
  }
  
  export default App;
