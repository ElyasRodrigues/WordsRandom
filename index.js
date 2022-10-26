const words = []
let wordsSorteadas = []

function randomWords(){
  for (let i = (words.length / 2); i > 0 ; i--) {
    let novaPala = words[Math.floor(Math.random() * words.length)]
    if(wordsSorteadas.includes(novaPala)) {
      i++
    } else {
      wordsSorteadas.push(novaPala)
    }
  }
  document.getElementById("randomTimesBtn").setAttribute("disabled", "true")
  document.getElementById("nameSaveBtn").setAttribute("disabled", "true")
  document.getElementById("timeName").setAttribute("disabled", "true")
  document.querySelectorAll("#btnRemovedLi").forEach(e => e.setAttribute("disabled", "true"))

  printRandomWords()
}

function printRandomWords(){
  wordsSorteadas.forEach(n => {
    const li = document.createElement("li") 
    li.innerText = n
    li.setAttribute("id", "liRandomTimes")
    document.getElementById("randomTimes").appendChild(li)
  })
  document.querySelectorAll(".hide").forEach(e => e.removeAttribute("class", "hide"))
}


function printSaveName(){
  const li = document.createElement("li") 
  li.innerText = document.getElementById("timeName").value
  words.push(document.getElementById("timeName").value)
  li.setAttribute("id", "liTimeName")
  const btnRemovedLi = document.createElement("button")
  btnRemovedLi.type = "button"
  btnRemovedLi.innerText = "x"
  btnRemovedLi.setAttribute("id", "btnRemovedLi")
  btnRemovedLi.setAttribute("onclick","remover(this)")
  li.appendChild(btnRemovedLi)
  document.getElementById("timesSave").appendChild(li)
  document.getElementById("timeName").value = ""
  document.getElementById("timeName").focus()
}

function remover(btn){
  let btnR = btn.parentNode
  document.getElementById("timesSave").removeChild(btnR)
  console.log(btnR);
}

document.getElementById("nameSaveBtn").addEventListener("click", printSaveName)
document.getElementById("randomTimesBtn").addEventListener("click", randomWords)
