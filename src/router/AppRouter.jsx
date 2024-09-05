import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { UmlRoutes } from "../uml/routes/UmlRoutes";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/*" element={<UmlRoutes />} />
            </Routes>
        </>
    )
}

