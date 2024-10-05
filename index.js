//  document.getElementById("A").innerText = 5

  let countEl =document.getElementById("count-el")
  console.log(countEl)
  let saveEl = document.getElementById("save-eln")
console.log(saveEl)

let count =0
 function increment() {
    
   count=count+1
   countEl.innerText =count
 }

 function save() {
    let countStr = count + " - "
     saveEl.innerText += countStr 
     countEl.textContent = 0
    count = 0
    
 }

