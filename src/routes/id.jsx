import { getid } from "../data";
import{Link, Outlet} from "react-router-dom";
export default function id(){

let id = getid()
return(
<div className="pokemon-card">
<h2>
{id.map((ids)=>( <Link style={{display: "block", margin:"1rem 0"}} to = {`/id/${ids.number}`} key= {ids.number}>
Datos del Alumno: Carlos Isaac Macias Herrera 
</Link>
))}
</h2>
<Outlet/>
</div>
);}

