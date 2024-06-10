//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=4bw7kDxceEU7QmgMGefoAGaPf1AFq1RLY0RgBmxM&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        } else if (data.media_type === 'video') {
          document.querySelector('iframe').src = data.url
        }

        document.querySelector('h3').innerText = ''
        document.querySelector('p').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

