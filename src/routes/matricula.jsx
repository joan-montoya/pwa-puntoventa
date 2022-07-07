import { getMatricula } from "../data";

import{Link, Outlet} from "react-router-dom";




export default function Matricula(){

    let matricula = getMatricula()

    return(

        <div className="pokemon-card">

            <h2>

                {matricula.map((matricu)=>(

                    <Link style={{display: "block", margin:"1rem 0"}}

                    to = {`/matricula/${matricu.number}`}

                    key= {matricu.number}>

                        Informacion del Alumno: 

                    </Link>

                ))}

            </h2>

            <Outlet/>

        </div>

    );

}