import url from "url";
let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8ex.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log("Host: " + miObjeto.host);
console.log("Pathname: " + miObjeto.pathname);
console.log("Params: " + miObjeto.searchParams);

function parsearUrl(miURL){
    try{
        const laURL = new URL(miURL); 
        return laURL
  
    }
    catch(error){
        console.log(error)
        const laURL = new URL(null); 
        return laURL
    }
}