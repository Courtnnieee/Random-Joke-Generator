# Random Joke Generator
A fun small desktop application built with **Electron** and **Node.js** that fetches and displays random jokes from the [Official Joke API](https://publicapi.dev/official-joke-api).

## Features
- Fetches a new joke at the click of a button.
- Displays **joke type**, **setup**, and **punchline**.
- Allows you to **copy the joke to clipboard**.
- Handles API rate limits (`response.status === 429`).

## Installation
```bash
git clone <your-repo-url>
cd random-joke-generator
npm install
npm start
```

## Usage
1. Open the app.
2. Click the **"Get Joke"** button to fetch a new joke.
3. View the **joke type**, **setup**, and **punchline**.
4. Click **"Copy to Clipboard"** to copy the joke.

## Technologies
- **API Fetching** 
- **DOM Manipulation**
- **Simple Styling** 
- **Electron & Node.js**
  
## Notes
- If you see a **429 status code**, it means the API rate limit has been reached. Try again later.
