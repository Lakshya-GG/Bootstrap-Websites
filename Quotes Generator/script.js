let quotesrealdata = "";
const quotetext = document.querySelector(".quote_area");
const quoteauthor = document.querySelector(".author");
quotetext.innerHTML="click on --New Quotes-- to generate a quote";

// quotetext
const newquote = () => {
     let rnum = Math.floor(Math.random()*10);
     quotesrealdata = realData[rnum];  //realData.text
    quotetext.innerHTML =`${quotesrealdata.text}`
    quoteauthor.innerHTML =`~ ${quotesrealdata.author}`  // quote.author
    var BackgroundImg=["./assets/background.jpg",
    "./assets/bg2.jpg",
    "./assets/bg1.jpg"
    ];
    var i = Math.floor((Math.random() * 3));
    document.body.style.backgroundbg = 'url("' + BackgroundImg[i] + '")';
}
let realData = "";

const getquotes = async () =>{
    const api= "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        newquote(); // console.log
    } catch (error) {
        console.log("error");
    }
}

const func = document.getElementById('btn');

func.addEventListener("click" , function()
{
    document.getElementById("copy-btn").style.boxShadow = "None";;
    getquotes();
});


function copyQuote()
{
    
    let v = quotetext.innerHTML;  // quotetext.innerHTML
    navigator.clipboard.writeText(v);  // .v

    document.getElementById("copy-btn").style.boxShadow = " 3px 3px 6px -2px #7e7e7ebf";
}

function tweetQuote(){

    document.querySelectorAll('.twitter-share-link')[0].href = `https://twitter.com/intent/tweet/?text=${quotetext.innerHTML} ${quoteauthor.innerHTML}`
}



