let userRoot = document.querySelector(".user-icons");
let computerRoot = document.querySelector(".computer-icons");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");


let dataSet = [
    {
    name:"rock",
    beats:"scissors",
    },
    {
    name:"paper",
    beats:"rock",
    },
    {
    name:"scissors",
    beats:"paper",
    }
]

let userSelected = {}, computerSelected = {}

function getWinner(user,computer){
    if(user.name === computer.name){
        result.innerText = "TIE 🤯"
    } else if (user.beats === computer.name){
        result.innerText = "You WON 🎉🎉"
    } else {
        result.innerText = "You LOST 😔😔"
    }
}

function generateRandomNumber(max = 3){
    return Math.floor(Math.random() * max )
}

function createUserLayout(){
    userRoot.innerHTML = ""
    dataSet.forEach(icon => {
        let li = document.createElement("li")
        let i = document.createElement("i")
        i.className = `fa fa-hand-${icon.name}-o`;

        if (userSelected.name === icon.name){
            li.classList.add("selected")
        }

        li.addEventListener("click", () => {
            userSelected = icon
            computerSelected = dataSet[generateRandomNumber()]
 
            getWinner(userSelected,computerSelected)

            rerender()
        })
        li.append(i);

        userRoot.append(li)
    })
}
createUserLayout()
function createComputerLayout(){
    computerRoot.innerHTML = ""
    dataSet.forEach(icon => {
        let li = document.createElement("li")
        let i = document.createElement("i")
        i.className = `fa fa-hand-${icon.name}-o`;
        if (computerSelected.name === icon.name){
            li.classList.add("selected")
        }
        li.append(i);

        computerRoot.append(li)
    })
}

createComputerLayout()

reset.addEventListener("click",() => {
    userSelected = {}
    computerSelected = {}
    rerender ()
})

function rerender (){
    createUserLayout()
    createComputerLayout()
}