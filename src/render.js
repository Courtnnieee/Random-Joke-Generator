//Changing div with buttons
const startConrainer = document.getElementById("joke-start");
const jokeContainer = document.getElementById("joke-container");

document.getElementById("start-btn").onclick = function () {
    if (jokeContainer.style.display === "none") {
        jokeContainer.style.display = "block";
        startConrainer.style.display = "none";
    } else {
        jokeContainer.style.display = "none";
    }
};
//reset
document.getElementById("home-joke-btn").onclick = function () {
    location.reload();
};


//Joke Code - Fetch https://official-joke-api.appspot.com/random_joke   
const jokeType = document.getElementById("joke-type");
const jokeSetup = document.getElementById("joke-setup");
const jokePunchline = document.getElementById("joke-punchline");
const categorySelect = document.getElementById('category-select');

fetchData();

async function fetchData() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke")

        if (!response.ok) {
            if (response.status === 429) {
                throw new Error("Too many requests! You have reached your 100 rate limit. Please try again after an hour.");
            } else {
                throw new Error(`Cannot fetch resource: ${response.status}`);
            }
        }

        const data = await response.json();
        console.log(data);

        jokeType.textContent = data.type; //properties
        jokeSetup.textContent = data.setup;
        jokePunchline.textContent = data.punchline;




    } catch (error) {
        console.error(error.message)
        jokeType.textContent = "";
        jokeSetup.textContent = "";
        jokePunchline.textContent = error.message;
    }
};


//newjoke
document.getElementById("new-joke-btn").addEventListener("click", fetchData);

//Copy
document.getElementById("copy-joke-btn").onclick = function () {

    const copyJoke = `${jokeSetup.textContent} - ${jokePunchline.textContent}`;

    navigator.clipboard.writeText(copyJoke)
        .then(() => {
            alert("Copied: " + copyJoke);
        })
        .catch(err => {
            console.error("Failed to copy:", err);
        });
};

