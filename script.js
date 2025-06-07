const quotes = [
            {
                text: "The only way to do great work is to love what you do.",
                author: "Steve Jobs"
            },
            {
                text: "Innovation distinguishes between a leader and a follower.",
                author: "Steve Jobs"
            },
            {
                text: "Life is what happens to you while you're busy making other plans.",
                author: "John Lennon"
            },
            {
                text: "The future belongs to those who believe in the beauty of their dreams.",
                author: "Eleanor Roosevelt"
            },
            {
                text: "It is during our darkest moments that we must focus to see the light.",
                author: "Aristotle"
            },
            {
                text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                author: "Winston Churchill"
            },
            {
                text: "The only impossible journey is the one you never begin.",
                author: "Tony Robbins"
            }, 
            {
                text: "In the middle of difficulty lies opportunity.",
                author: "Albert Einstein"
            },
            {
                text: "Believe you can and you're halfway there.",
                author: "Theodore Roosevelt"
            },
            {
                text: "The only person you are destined to become is the person you decide to be.",
                author: "Ralph Waldo Emerson"
            },
            {
                text: "Your time is limited, don't waste it living someone else's life.",
                author: "Steve Jobs"
            },
            {
                text: "Be yourself; everyone else is already taken.",
                author: "Oscar Wilde"
            },
            {
                text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
                author: "Albert Einstein"
            },
            {
                text: "You only live once, but if you do it right, once is enough.",
                author: "Mae West"
            },
            {
                text: "Be the change that you wish to see in the world.",
                author: "Mahatma Gandhi"
            },
            {
                text: "The best time to plant a tree was 20 years ago. The second best time is now.",
                author: "Chinese Proverb"
            },
            {
                text: "A room without books is like a body without a soul.",
                author: "Marcus Tullius Cicero"
            },
            {
                text: "Don't walk in front of me… I may not follow. Don't walk behind me… I may not lead. Walk beside me… just be my friend.",
                author: "Albert Camus"
            },
            {
                text: "If you tell the truth, you don't have to remember anything.",
                author: "Mark Twain"
            },
            {
                text: "The journey of a thousand miles begins with one step.",
                author: "Lao Tzu"
            }
];

const generateQuote = document.getElementById("generate-quote");
const authorText = document.getElementById("author-text");
const authorName = document.getElementById("author-name");


generateQuote.addEventListener("click", function() {
    let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    authorText.textContent = quotes[randomQuoteIndex].text;
    authorName.textContent = quotes[randomQuoteIndex].author;
});



