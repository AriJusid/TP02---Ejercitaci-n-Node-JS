import {OMDBGetByImdbID, OMDBSearchByPage, OMDBSearchComplete} from './modules/omdb-wrapper.js'


let resultado  = await OMDBSearchByPage("cars", 1);
let resultado2 = await OMDBSearchComplete("cars");
let resultado3 = await OMDBGetByImdbID("tt1392170");

console.log("OMDBSearchByPage", resultado);
console.log("OMDBSearchComplete", resultado2);
console.log("OMDBGetByImdbID", resultado3);



