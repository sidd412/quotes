const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");
const date = document.getElementById("date") ;

let realData = "";
let quotesData = "";

let cDate= new Date()
date.innerText = `${cDate}`
// console.log(cDate)
// console.log(cDate.getHours()) ;
// console.log(cDate.getMinutes())
// console.log(cDate.get())


const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
    window.open(tweetPost);
}

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 1000)
    let quotesData = realData[rnum]
    // console.log(realData[rnum].author)
    quotes.innerText = '"'+`${quotesData.text}`+'"';
    author.innerText =  '-'+`${quotesData.author}`;
};

getQuotes = async () => {
    const rawQuotes = "https://type.fit/api/quotes";
    try {
        let data = await fetch(rawQuotes);
        realData = await data.json()
        getNewQuotes();
        // console.log(realData[0].text) ;
        // console.log(realData[0].author) ;
    }
    catch (error) {

    }
}

tweetMe.addEventListener("click", tweetNow)
newQ.addEventListener("click", getNewQuotes)
getQuotes();



