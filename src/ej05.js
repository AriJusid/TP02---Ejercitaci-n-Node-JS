import url from "url";
let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log("Host: " + miObjeto.host);
console.log("Pathname: " + miObjeto.pathname);
console.log("Params: " + miObjeto.searchParams);

function parsearUrl(miURL){
    const laURL = new URL(miURL);    
    return laURL
}