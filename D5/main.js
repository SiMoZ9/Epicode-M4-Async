const fetchMusic = (query, id) => {
  const section = document.querySelector(`#${id}`)

  const row = document.querySelector(`#${id}Section`)
  console.log(row)
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
  )
    .then((raw) => {
      console.log('raw',raw);      
    })
    .then((res) => {
      let music = res.data
      section.classList.remove("d-none")
      for (let i = 0; i < music.length; i++) {
        const element = music[i]
        row.innerHTML += `<div class='col col-3'> <a href="detail.html?title=${element.title}&artist=${element.artist.name}"><img class='w-100' src='${element.album.cover_xl}'/> </a></div>`
      }
    })
    .catch((err) => console.log(err))
}

window.onload = () => {

  fetchMusic("queen", "queen")
  fetchMusic("metallica", "metallica")
}