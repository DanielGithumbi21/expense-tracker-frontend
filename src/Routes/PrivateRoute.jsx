import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { DataContext } from "../Context/DataContext";


const PrivateRoute = () => {
    const { user } = useContext(DataContext)

    if (user == null || user == undefined) {
        return <Navigate to="/auth/sign" replace />
    }
    return <Outlet />;


};

export default PrivateRoute;