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

  printRandomWords()
}

function printRandomWords(){
  wordsSorteadas.forEach(n => {
    const li = document.createElement("li") 
    li.innerText = n
    li.setAttribute("id", "liRandomTimes")

    document.getElementById("randomTimes").appendChild(li)
  })
}

function printSaveName(){
  const li = document.createElement("li") 
  li.innerText = document.getElementById("timeName").value
  words.push(document.getElementById("timeName").value)
  li.setAttribute("id", "liTimeName")
  document.getElementById("timesSave").appendChild(li)
  document.getElementById("timeName").value = ""
  console.log(words);
}

document.getElementById("nameSaveBtn").addEventListener("click", printSaveName)
document.getElementById("randomTimesBtn").addEventListener("click", randomWords)
