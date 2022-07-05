let id = [
    {
    number: 190967,
    name: "Carlos Isaac Macias Herrera",  
}
];
export function getid(){
    return id;
}
export function getIds(number){
    return id.find((ids)=> ids.number===number);
}
