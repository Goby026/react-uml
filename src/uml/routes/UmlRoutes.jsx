import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { Trabajadores } from "../pages/trabajadores/Trabajadores"
import { Vacaciones } from "../pages/Vacaciones"
import { Dashboard } from "../pages/Dashboard"
import { Equipos } from "../pages/Equipos"
import { Citas } from "../pages/Citas"
import { Trabajador } from "../pages/trabajadores/Trabajador"

export const UmlRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to={'/dashboard'} />} />
                    <Route path="trabajadores" element={<Trabajadores />} />
                    <Route path="trabajador/:id" element={<Trabajador />} />
                    <Route path="vacaciones" element={<Vacaciones />} />
                    <Route path="equipos" element={<Equipos />} />
                    <Route path="citas" element={<Citas />} />
                    <Route path="dashboard" element={<Dashboard />} />
                </Routes>

            </div>
        </>
    )
}
