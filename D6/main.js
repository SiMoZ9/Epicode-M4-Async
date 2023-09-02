// D6 Local storage


const id = 'song'
const getRow = () => document.querySelector(`#${id}Section`)

const fetchMusic = async (query, id) => {
  /*
    Prima della ricerca dinamicizzata gli id degli artisti era già definiti nell'index
  */
  const section = document.querySelector(`#${id}`)
  let raw = ""
  try {
    raw = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
    )
  } catch (error) {
    console.error(error)
  }

  try {
    if (raw.ok) {
      const res = await raw.json()
      let music = res.data
      section.classList.remove("d-none")
      if (music.length > 0) {
        localStorage.setItem("query", query); // salvo la query nella memoria del browser
        for (let i = 0; i < music.length; i++) {
          const element = music[i]
          /*
            Aggiugo alla section precedente, quello scritto innerHTML
          */
          getRow().innerHTML += `<div class='col col-3'> <a href="detail.html?title=${element.title}&artist=${element.artist.name}"><img class='w-100' src='${element.album.cover_xl}'/> </a></div>`
        }
      }
    } else {
      throw new Error(raw.statusText)
    }
  } catch (e) {
      console.error(error)
  }
}

const search = () => {
  //prendo il value dell'input
  getRow().innerHTML = '';
  const queryField = document.getElementById("searchField").value;
  fetchMusic(queryField, 'song');
  document.getElementById('titolo').innerText = queryField;
}

window.onload = () => {
  const history = localStorage.getItem("query");
  let query = history ? history : "";

  if (query && query != "") {
    fetchMusic(query, 'song');
    document.getElementById("searchField").value = query;
    document.getElementById('titolo').innerText = query;
  }
}