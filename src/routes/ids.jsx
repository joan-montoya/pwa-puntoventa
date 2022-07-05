import {useParams} from "react-router-dom";
import { getIds } from "../data";
export default function Ids(){

    let params = useParams();
    let ids = getIds(parseInt(params.idsId));
    return(
        <h2>
        <h2>id:{ids.number}</h2>
        <p>
            Nombre:{ids.name}
        </p>
    </h2>
    );
    }