const id = 'song'
const getRow = () => document.querySelector(`#${id}Section`)

const fetchMusic = (query, id) => {
  /*
    Prima della ricerca dinamicizzata gli id degli artisti era già definiti nell'index
  */
  const section = document.querySelector(`#${id}`)
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
  )
    .then((raw) => {
      if (raw.ok) return raw.json()

      else throw new Error(raw.statusText)
      
    })
    .then((res) => {
      let music = res.data
      section.classList.remove("d-none")
      for (let i = 0; i < music.length; i++) {
        const element = music[i]

        /*
          Aggiugo alla section precedente, quello scritto innerHTML
        */

        getRow().innerHTML += `<div class='col col-3'> <a href="detail.html?title=${element.title}&artist=${element.artist.name}"><img class='w-100' src='${element.album.cover_xl}'/> </a></div>`
      }
    })
    .catch((err) => {throw new Error(err)})
}

const search = () => {
  //prendo il value dell'input
  getRow().innerHTML = '';
  const query = document.getElementById("searchField").value;
  fetchMusic(query, 'song');
  document.getElementById('titolo').innerText = query;
}

/* window.onload = () => {

  fetchMusic("queen", "queen")
  fetchMusic("metallica", "metallica")
} */