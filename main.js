let btn = document.querySelector('#click');
let output= document.querySelector('#output');

 // Quote
 let quote = 
 [
`«Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure». — Oprah Winfrey`,
 '«The art of letting go is the art of loving». — Unknown',
 '«When you let go, you create space for better things to enter your life». — Unknown',
 '“If you have the ability to love, love yourself first.” – Charles Bukowski',
 '“Make happiness your priority and be gentle with yourself in the process.” – Bronnie Ware',
 '“Talk to yourself like someone you love.” – Brene Brown',
 'Love yourself first, and everything else falls in line. You really have to love yourself to get anything done in this world.” – Lucille Ball',
 ];

 // click btn

 btn.addEventListener('click', function(){
   let randomQuote = quote[Math.floor(Math.random() * quote.length )]
   output.innerHTML = randomQuote
     
   
 });

 