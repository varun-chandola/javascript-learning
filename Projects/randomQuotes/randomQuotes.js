const URL = `https://api.whatdoestrumpthink.com/api/v1/quotes/random`;
const generate = document.querySelector('.new');


let displayQuote = (quote)=>{
    const quoteText = document.querySelector('.quote');
    quoteText.textContent = quote;
}

async function randomQuote(){
    try{
        const response = await fetch(URL);
        const json = await response.json();
        displayQuote(json.message)
    }catch(rejData){
        console.log(rejData);
        alert('failed to fetch new quote') ;
    }
}
generate.addEventListener('click', randomQuote);
