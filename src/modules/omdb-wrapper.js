import axios from "axios";


const APIKEY          = "78296dac"; 


const OMDBSearchByPage = async (searchText, page = 1) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : []

    };

    try{
    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=cars`;
    const apiResponse = await axios.get(requestString);

    if(apiResponse.data.Response === "True"){
        returnObject.respuesta = true
        returnObject.cantidadTotal = apiResponse.data.totalResults
        returnObject.datos = apiResponse.data.Search
    }

    else{returnObject.respuesta = false}
  
    }
    catch{
        console.log("error")
    }
    return returnObject;

};


const OMDBSearchComplete = async (searchText) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : []

    };


    try{
        const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`;
        const apiResponse = await axios.get(requestString);
    
        if(apiResponse.data.Response === "True"){
            returnObject.respuesta = true
            returnObject.cantidadTotal = apiResponse.data.totalResults
            returnObject.datos = apiResponse.data.Search
        }
    
        else{returnObject.respuesta = false}
      
        }
        catch{
            console.log("error")
        }

  return returnObject;

};


const OMDBGetByImdbID = async (imdbID) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : {}

    };

    try{
        const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;
        const apiResponse = await axios.get(requestString);
    
        if(apiResponse.data.Response === "True"){
            returnObject.respuesta = true
            returnObject.datos = apiResponse.data
        }
    
        else{returnObject.respuesta = false}
      
        }
        catch{
            console.log("error")
        }
  return returnObject;

};



export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};