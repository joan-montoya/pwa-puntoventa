import {useParams} from "react-router-dom";
import { getIds } from "../data";
import id from "./id";
export default function Ids(){

    let params = useParams();
    let ids = getIds(parseInt(params.idsId));
    return(
        <h2>
        <h2>Matricula:190967</h2>
        <p>
            Nombre:Carlos Isaac Macias Herrera
        </p>
    </h2>
    );
    }