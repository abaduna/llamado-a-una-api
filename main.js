const url = "https://api.themoviedb.org/3/movie/550?api_key=e20965bfcbd8dd4c84e5ab765252cd21"



const cargarpeliculas = async() =>{
    try{
         const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular/550?api_key=e20965bfcbd8dd4c84e5ab765252cd21")
         .console.log(respuesta)
        if (respuesta.status===200) {
            const datos = await  respuesta.json()
                let movies = ""
                datos.results.forEach(movies => {
                    movies += "<h1>${movies.title}</h1>"
               });
               document.getElementById("contenedor").innerHTML = movies
        }else if (respuesta.status===401){
            alert("no funciona")
        }else if (respuesta.status === 404){
            alert("no funciona")
        }


        
    }catch(error){
        console.log(error);
        alert("eror")
    }

    

  
  
}
cargarpeliculas()