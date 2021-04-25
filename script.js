const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
//adding header to get an json element instead of html response
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  //res is the promise returned
  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeElement.innerHTML = data.joke
}
// api for "Dad Joke"
// https://icanhazdadjoke.com/api
// Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// fetch returns a promise.


// Another approch with 2 then to each promise returned
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }