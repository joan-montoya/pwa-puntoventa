let matricula = [
    {
    number: 190967,
    name: "Carlos Isaac Macias Herrera",  
}
];
export function getMatricula(){
    return matricula;
}
export function getMatricu(number){
    return matricula.find((matricu)=> matricu.number===number);
}
