// document.getElementById("count").innerText = 5
//camelCase 
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    
    count = count + 1 
    countEl.innerText = count 
   
}

function save() {
    console.log(count)
}

save()