let title = [`Soul`, `Your Na(me Engraved Herein`, `Mulan`, `Onward`, `Tenet`, `Wonder Woman 1984`]
let pic = [`<img src="https://lumiere-a.akamaihd.net/v1/images/p_disney_soul_20263_eac955fc.jpeg">`, `<img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Your_Name_Engraved_Herein_Poster.jpg/220px-Your_Name_Engraved_Herein_Poster.jpg">`, `<img src="https://static.wikia.nocookie.net/disney/images/e/e9/Mulan_%282020%2C_Disney%2B_Original_Poster%29.jpg/revision/latest?cb=20200809175515">`,`<img src="https://lumiere-a.akamaihd.net/v1/images/p_onward_19024_dbb512d5.jpeg">`, `<img src="https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg">`,`<img src="https://upload.wikimedia.org/wikipedia/en/4/4e/Wonder_Woman_1984.png">`, ]

var x

for (x = 0; x < 6; x++) {
  document.querySelector(".grid").innerHTML += `<div>
    <div id="T1">${title[0+x]}</div>
    <div id="P1">${pic[0+x]}</div>
  </div>`
}

function add(element){
  let addT = document.querySelector("#addT").value
  let addP = document.querySelector("#addP").value
  title.unshift(addT)
  title.pop()
  pic.unshift(`<img src="${addP}">`)
  pic.pop()
  title.forEach(function(element) {console.log(element)})
  var x = 0
  document.querySelector(".grid").innerHTML = ``
  for (x = 0; x < 6; x++) {
    document.querySelector(".grid").innerHTML += `<div>
      <div id="T1">${title[0+x]}</div>
      <div id="P1">${pic[0+x]}</div>
    </div>`
  }
}

// title.forEach(function(element, index) {
//   console.log(element, index)
//   console.log(pic[index])
// })
