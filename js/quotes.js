const quotes = [
    {
        quote: "It's a sign of mediocrity when you demonstrate gratitude with moderation.",
        author: "Roberto Benigni",
    },
    {
        quote: "The first duty of love is to listen.",
        author: "Paul Tillich",
    },
    {
        quote: "Be still when you have nothing to say; when genuine passion moves you, say what you've got to say, and say it hot.",
        author: "D. H. Lawrence",
    },
    {
        quote: "There are two ways to slide easily through life; to believe everything or to doubt everything. Both ways save us from thinking.",
        author: "Alfred Korzybski",
    },
    {
        quote: "Power tends to corrupt, and absolute power corrupts absolutely.",
        author: "Roberto Benigni",
    },
    {
        quote: "To live a creative life, we must lose our fear of being wrong.",
        author: "Joseph Chilton Pearce",
    },
    {
        quote: "An honest man can feel no pleasure in the exercise of power over his fellow citizens.",
        author: "Thomas Jefferson",
    },
    {
        quote: "My mind to me a kingdom is, Such present joys therein I find, That it excels all other bliss.",
        author: "Sir Edward Dyer",
    },
    {
        quote: "Truly great madness cannot be achieved without significant intelligence.",
        author: "Henrik Tikkanen",
    },
    {
        quote: "The glory of great men should always be measured by the means they have used to acquire it.",
        author: "Francois de La Rochefoucauld",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = '✨ ' + todaysQuote.quote;
author.innerText = ' - ' + todaysQuote.author;