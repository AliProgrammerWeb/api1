function fetchapi(){


    fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')

  .then(response => response.json())

  .then(data => {
        let movies = data;
        let image = document.getElementById('img');
        let title = document.getElementById('title');
        let year = document.getElementById('year');
        let runtime = document.getElementById('runtime');        
        let i=0;
        console.log(data);
        setInterval(()=>{
            
                  image.setAttribute('src',`${movies[i].Poster}`)
                  title.innerHTML='Title : '+`${movies[i].Title}`;
                  year.innerHTML='Year : '+`${movies[i].Year}`;
                  runtime.innerHTML='Runtime : '+`${movies[i].Runtime}`;
                  i += 1;
                  if(i==movies.length-1){
                      i=0;
                  }
            },4000
        )
  });

}