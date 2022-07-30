let searchText = 0
function searchTitle(event) {
  event.preventDefault()
  let form = new FormData(event.target)
  searchText = form.get('title')
  getText('http://www.omdbapi.com/?apikey=b1b5d454' + '&s=' + searchText)
}

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  myText = myText.split('}')
  myText.pop()
  myText.pop()
  let t = ''
  let c = 0
  for (item of myText) {
    c += 1
    let title = cut("Title")
    let year = cut("Year")
    let imdbID = cut("imdbID")

    // let img = document.createElement('img')
    // img.src = poster
    // document.getElementById('body').appendChild(img)
    t += `<br> ${c}. ${title} (${year}) <br> `

  }
  document.getElementById('demo').innerHTML = t

  function cut(some) {
    let i = item.indexOf(some)
    i += 3 + some.length
    let j = item.indexOf('"',i) 
    let result = item.slice(i,j)
    return result
  }
}


