import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import Register from "../../AuthArea/Register/Register";
import Home from "../Home/Home";
import VacationList from "../../VacationArea/VacationList/VacationList";
import AddVacation from "../../VacationArea/AddVacation/AddVacation";
import UpdateVacation from "../../VacationArea/UpdateVacation/UpdateVacation";
import Graph from "../../VacationArea/Graph/Graph";
import PageNotFound from "../PageNotFound/PageNotFound";
import store from "../../../Redux/Store";

function Routing(): JSX.Element {

    const userId = store.getState().authState.user?.userId

    return (
        <Routes>

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/home" element={<Home />} />
            <Route path="/vacations" element={<VacationList />} />
            <Route path="/vacations/new" element={<AddVacation />} /> 
            <Route path="/vacations/edit/:id" element={<UpdateVacation />} /> 
            <Route path="/graphs" element={<Graph />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<PageNotFound/> }></Route>

        </Routes>
    );
}

export default Routing;