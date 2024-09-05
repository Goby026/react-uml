import { useFetch } from "../../helpers/useFetch";
import { Row } from "./Row";

export const Trabajadores = () => {

  const url = `http://localhost:8082/api/uml1/selva/v1/trabajadores`;

  const { data, isLoading } = useFetch(url);
  // const [trabajadores, setTrabajadores] = useState(data);

  return (
    <>
      <div className="container">
        <h1>UML I SELVA CENTRAL</h1>
        <hr />
        <table className="table table-success table-striped fs-6">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Dni</th>
              <th>Dfiscal</th>
              <th>Dependencia</th>
              <th>Despacho</th>
              <th>Siglas</th>
              <th>Cargo</th>
              <th>Fecha ingreso</th>
              <th>Reg lab</th>
              <th>Correo personal</th>
              <th>Correo institucional</th>
              <th>Celular</th>
              <th>Estado</th>
              <th>Sede</th>
              <th>Presupuesto</th>
              <th>Colegiatura</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? 'Cargando.....' : data.trabajadores.map((item) => (
              <Row item={item} />
            ))}
          </tbody>
        </table>

      </div>
    </>
  )
}
