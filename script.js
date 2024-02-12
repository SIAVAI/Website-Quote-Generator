let btn =document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[{
    quote:"Be yourself; everyone else is already taken.",
    person:"Oscar Wilde"
},{
    quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    person:"Marilyn Monroe"
},{
    quote:"So many books, so little time.",
    person:" Frank Zappa"
},{
    quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    person:"Albert Einstein"
},{
    quote:"A room without books is like a body without a soul.",
    person:"Marcus Tullius Cicero"
},{
    quote:"You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    person:"William W. Purkey"
},{
    quote:"You only live once, but if you do it right, once is enough.",
    person:"Mae West"
},{
    quote:"Be the change that you wish to see in the world.",
    person:"Mahatma Gandhi"
},{
    quote:"In three words I can sum up everything I've learned about life: it goes on.",
    person:"Robert Frost"
}
];

if (btn) {
    btn.addEventListener('click', function() {
      let random = Math.floor(Math.random() * quotes.length);
      quote.innerText = quotes[random].quote;
      person.innerText = quotes[random].person;
    });
  }