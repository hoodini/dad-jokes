async function fetchDadJoke() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        return data.joke;
    } catch (error) {
        return 'Why did the joke fail to load? Because it was dad-tired! (API Error)';
    }
}

async function updateJoke() {
    const jokeText = document.getElementById('joke-text');
    jokeText.textContent = 'Loading...';
    const joke = await fetchDadJoke();
    jokeText.textContent = joke;
}

document.getElementById('new-joke-btn').addEventListener('click', updateJoke);

// Load initial joke
updateJoke();