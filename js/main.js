var btn = document.getElementById("btn")

var arr = ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." , "So many books, so little time" ,"We accept the love we think we deserve."]

function randomQuote(){
    var x = Math.random()*3
    document.getElementById("quote").innerHTML = `${arr[ Math.floor(x)]}`
}


btn.addEventListener("click" , randomQuote)