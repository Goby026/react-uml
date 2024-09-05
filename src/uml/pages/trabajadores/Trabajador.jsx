import { useParams } from "react-router-dom";
import { useFetch } from "../../helpers/useFetch";

export const Trabajador = () => {
    const { id } = useParams();
    const url = `http://localhost:8082/api/uml1/selva/v1/trabajadores/${id}`;
    const { data, isLoading } = useFetch(url);

    console.log(data);
    return (
        <>
            {isLoading ? 'Cargando.....' : (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="txtNombres" className="form-label">Nombres</label>
                                <input type="text" className="form-control" id="txtNombres" placeholder="nombres" value={data.nombres} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="txtApellidos" className="form-label">Apellidos</label>
                                <input type="text" className="form-control" id="txtApellidos" placeholder="apellidos" value={data.apellidos} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
