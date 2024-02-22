//document.getElementById("count-yu").innerText = 5

let saveel = document.getElementById("save-dat")
let countel = document.getElementById("count")
let count = 0
function inc(){
    count += 1
    countel.textContent = count
}



function save(){
    let countstr = count + " - "
    saveel.textContent += countstr
    countel.textContent = 0
    count = 0



}

