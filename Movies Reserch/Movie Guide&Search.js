const MovieNameRef = document.querySelector("#Movie-name");
const searchBtn = document.querySelector("#search-btn");
const results = document.querySelector(".result");

//Now to fetch the movie from the Api service ;
let getmovie = () => {
  let movieName = MovieNameRef.value;
  console.log(movieName);
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;


  //if the value is Zero then

  if (movieName.length <= 0) {
    results.innerHTML = `<h3 class="msg">This Cannot be Empty , Please enter a movie name</h3>`;
  }



  //if the Input value isnt Zero then
  else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //if movie exist in database then
        if ((data.Response = "True")) {
            results.innerHTML = ` 
            <div class = "info">
                    <img src = ${data.Poster} class = "poster">
                <div>

                    <h2>${data.Title}</h2>

                    <div class = "rating">
                        <img src ="star (1).png">
                        <h4>${data.imdbRating}&nbsp Rating</h4>
                    </div>

                    <div class = "details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>

                    <div class = "genre'>
                        <div >${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
               
                </div>
            </div> 
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p>

                `;
        }
          // if Movie Dosent Exist in Database
        else{
            results.innerHTML = `<h3 class = "msg">${data.Error}</h3>`

        }

    })
    .Catch(() => {
        results.innerHTML = `<h3 class="msg"> Error Occured </h3> `
    })

    
}

};

searchBtn.addEventListener("click", getmovie);
window.addEventListener("load", getmovie);
