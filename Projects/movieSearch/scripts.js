// api key = faa36f4c8fedce41439e86b442a888ec
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

// image src = imagepath +  backdrop_path
const topRated ="https://api.themoviedb.org/3/movie/top_rated?api_key=faa36f4c8fedce41439e86b442a888ec";

const searchApi = `https://api.themoviedb.org/3/search/movie?&api_key=faa36f4c8fedce41439e86b442a888ec&query=`;

async function fetchMovies(api){
    const response = await fetch(api);
    const data = await response.json();
    displayMovie(data.results);
}



const main = document.querySelector('main');

function displayMovie(result){
    main.innerHTML = ''
    result.forEach((eachMov)=>{
        const card = document.createElement('div');
        card.className = 'card';

        let rating = eachMov.vote_average.toFixed(1)
        let voteCount = (eachMov.vote_count)/100;
        let numberOfVotes =  Math.round(voteCount) 

        const poster = document.createElement('div');
        poster.innerHTML = 
        `
                <img src='${IMGPATH + eachMov.poster_path}' alt='poster'/>
        `;
        const details = document.createElement('div');
        details.innerHTML = 
        `
        <h1>${eachMov.original_title}</h1>
        <p>${eachMov.release_date}</p>
        <p>⭐${rating} (${numberOfVotes + ' K'})</p>
        `;

        card.appendChild(poster);
        card.appendChild(details)
        card.style.display = 'inline-block'
        main.appendChild(card)
    })
    document.body.appendChild(main);
}


let searchVal ;
const ip = document.querySelector('input');
ip.addEventListener('keyup' , (event)=>{
    if(event.target.value != ''){
        searchVal = event.target.value;
    }
    if(event.key == 'Enter'){
        fetchMovies(searchApi + searchVal)
    }
})


const button = document.querySelector('button')
button.addEventListener('click' ,()=>{
    fetchMovies( searchApi + searchVal);
})

// init call
fetchMovies(topRated)