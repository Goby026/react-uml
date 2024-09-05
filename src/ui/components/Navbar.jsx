import { NavLink, useNavigate } from "react-router-dom"

export const Navbar = (props) => {

    const navigate = useNavigate();

    const onLogout = ()=> {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">Navbar</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current="page" to={'/trabajadores'}>Trabajadores</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={'/vacaciones'}>Vacaciones</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={'/equipos'}>Equipos</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={'/citas'}>Citas PSC</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                        </li>
                                    </ul>
                                    <div>
                                        <form className="container-fluid">
                                            <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
                                            <button className="btn btn-sm btn-outline-secondary m-lg-2" type="button" onClick={onLogout}>Logout</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    </div>
                </div>
            </div>
        </>
    )
}
