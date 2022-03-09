let count = 0
let counter = document.getElementById("counterElement")
console.log(counter)
function increment() {
    count = count + 1
    counter.innerText = count
    console.log("Test")
}

function save() {
    alert(count)
}

