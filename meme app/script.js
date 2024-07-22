let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

let subreddits = ['dogmemes','funnymemes','comedymemes','pubitymemes','animalmemes','womenmemes','menmemes'];

const getMeme = async () => {
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    const url = `https://meme-api.com/gimme/${randomSubreddit}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);

        // Display meme image and title only after the image loads
        let memeImg = new Image();
        memeImg.onload = () => {
            meme.src = data.url;
            title.innerHTML = data.title;
        };
        memeImg.src = data.url;
    } catch (error) {
        console.error('Failed to fetch meme:', error);
    }
};

getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
