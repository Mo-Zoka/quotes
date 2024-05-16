var quotes = [
    {
        body: "Be yourself; everyone else is already taken.",
        author: "― Oscar Wilde"
    },
    {
        body: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "― Albert Einstein"
    },
    {
        body: "A room without books is like a body without a soul.",
        author: "― Marcus Tullius Cicero"
    },
    {
        body: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "― Bernard M. Baruch"
    },
    {
        body: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "― Dr. Seuss"
    },
    {
        body: "You only live once, but if you do it right, once is enough.",
        author: "― Mae West"
    },
    {
        body: "Be the change that you wish to see in the world.",
        author: "― Mahatma Gandhi"
    }
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var cartona = "";
var i, lastNumber;

function generateQuote() {
    lastNumber = i;
    i = getRandomInt(0, 6);
    while (i == lastNumber) {
        i = getRandomInt(0, 6);
    }
    cartona = `<div class="lol">"${quotes[i].body}"</div> <div class="lol">${quotes[i].author}</div>`;
    document.getElementById("items").innerHTML = cartona;
}


