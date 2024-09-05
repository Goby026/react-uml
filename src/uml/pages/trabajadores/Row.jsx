import { Link } from "react-router-dom";

export const Row = ({ item }) => {

    return (
        <tr key={item.id}>
            <td>
                <Link to={`/trabajador/${item.id}`}>{item.id}</Link>
                {/* <Link to={user.id}>{user.name}</Link> */}
            </td>
            <td>{item.nombres}</td>
            <td>{item.apellidos}</td>
            <td>{item.dni}</td>
            <td>{item.dfiscal}</td>
            <td>{item.dependencia}</td>
            <td>{item.despacho}</td>
            <td>{item.siglasdes}</td>
            <td>{item.cargoTrabajador}</td>
            <td>{item.fechaing}</td>
            <td>{item.reglab}</td>
            <td>{item.correoper}</td>
            <td>{item.correoins}</td>
            <td>{item.celular}</td>
            <td>{item.estado}</td>
            <td>{item.sede}</td>
            <td>{item.presupuesto}</td>
            <td><input type="text" className="form-control"/></td>
        </tr>
    )
}
