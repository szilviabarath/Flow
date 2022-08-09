let links = document.querySelectorAll(".nav-link")

let show = (nodes, type) => {
    Array.from(document.querySelectorAll(".abc li")).forEach (n => n.style.display = "none")

    nodes.forEach (n => n.style.display = "block")
}

links.forEach(el=> {
    el.addEventListener("click",(e) => {
        e.preventDefault()
        let target = document.querySelectorAll("[data-id= '"+ el.textContent.toLowerCase() +"']")
        show(target)
    })
})

Array.from(document.querySelectorAll(".classes")).forEach (n => {
    n.addEventListener("click",(e) => {
        let type = e.target.dataset.type
        let nodes = document.querySelectorAll("[data-"+ type +"]")
        show(nodes)
    })
})

const letters = document.getElementById("letters");
const letterList = document.querySelector(".letter-list")
const btn = document.getElementById("all-classes");
    btn.onclick = function () {

        letters.style.display = "block";
    };

document.querySelector(".show-all").addEventListener("click",(e) => {
  Array.from(document.querySelectorAll(".abc li")).forEach(el => el.style.display = "block")
})


function CopyToClipboard(id)
{
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}

document.querySelector("#letters").style.display = "block";