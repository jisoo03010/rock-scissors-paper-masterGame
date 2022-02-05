// NOTE: 변수 초기화
let rules = document.getElementById("rules")
let popup = document.getElementById("popup")
let contents = document.getElementById("contents")
let playgame = document.getElementById("playgame")
let paper = document.getElementById("paper")
let scisors = document.getElementById("scisors")
let rock = document.getElementById("rock")

// NOTE: 팝업 오픈
rules.addEventListener("click", function pop() {
    popup.style.display = "block"
    console.log(1)
})

let close_icon = document.getElementById("close")
close_icon.addEventListener("click", function cl() {
    popup.style.display = "none"
})



function pagemove() {
    let my = document.getElementById("my")
    contents.style.display = "none"
    playgame.style.display = "flex"

    let paper_random = document.getElementById("paper_random")
    let scisors_random = document.getElementById("scisors_random")
    let rock_random = document.getElementById("rock_random")

    let paper_randomhose = document.getElementById("paper_randomhose")
    let scisors_randomhose = document.getElementById("scisors_randomhose")
    let rock_randomhose = document.getElementById("rock_randomhose")


    if (event.currentTarget == paper) {
        my.appendChild(paper_random)

        setTimeout(function randomimg() {
            let random = document.getElementById("random")
            let result = document.getElementById("result")
            var imgArray = new Array();
            imgArray[0] = paper_randomhose;
            imgArray[1] = scisors_random;
            imgArray[2] = rock_random;

            var imgNum = Math.floor(Math.random() * 3)
            let randomappend = random.appendChild(imgArray[imgNum])

            if (randomappend == paper_randomhose) {
                result.innerText = "YOU 비김"
                paper_randomhose.style.display = "block"

            } else if (randomappend == scisors_random) {
                console.log('졌습니다')
                result.innerText = "YOU LOSE"
                random.appendChild(scisors_random).className += "waves"
            } else {

                console.log('이겼습니다')
                result.innerText = "YOU WIN"
                result.style.left = 417 + "px"
                my.appendChild(paper_random).className += "waves"

            }


        }, 1000)

    } else if (event.currentTarget == scisors) {
        my.appendChild(scisors_random)

        setTimeout(function randomimg() {
            let random = document.getElementById("random")
            let result = document.getElementById("result")
            var imgArray = new Array();
            imgArray[0] = paper_random;
            imgArray[1] = scisors_randomhose;
            imgArray[2] = rock_random;

            var imgNum = Math.floor(Math.random() * 3)
            let randomappend = random.appendChild(imgArray[imgNum])

            let score_num = document.getElementById("score_num")
            if (randomappend == paper_random) {
                console.log('이겼습니다')
                result.innerText = "YOU WIN"
                my.appendChild(scisors_random).className += "waves"
                result.style.left = 417 + "px"


            } else if (randomappend == scisors_randomhose) {
                console.log('비겼습니다')
                result.innerText = "YOU 비김"
                scisors_randomhose.style.display = "block"
            } else {
                console.log('졌습니다')
                result.innerText = "YOU LOSE"
                random.appendChild(rock_random).className += "waves"
            }
        }, 1000)

        // my.style.top = 524 + "px"
        // my.style.right = 53 + "vw"

    } else if (event.currentTarget == rock) {
        my.appendChild(rock_random)

        setTimeout(function randomimg() {
            let random = document.getElementById("random")
            let result = document.getElementById("result")
            var imgArray = new Array();
            imgArray[0] = paper_random;
            imgArray[1] = scisors_random;
            imgArray[2] = rock_randomhose;

            var imgNum = Math.floor(Math.random() * 3)
            let randomappend = random.appendChild(imgArray[imgNum])
            if (randomappend == paper_random) {
                console.log('졌습니다')
                result.innerText = "YOU LOSE"
                random.appendChild(paper_random).className += "waves"
            } else if (randomappend == scisors_random) {
                console.log('이겼습니다')
                result.innerText = "YOU WIN"
                result.style.left = 417 + "px"

                my.appendChild(rock_random).className += "waves"

            } else {
                console.log('비겼습니다')
                result.innerText = "YOU 비김"
                rock_randomhose.style.display = "block"
            }
        }, 1000)

        // my.style.top = 26 + "vw"
        // my.style.right = 43.8 + "vw"
    }
    playgame.querySelector("#my").style.display = "block"


}


// let playAgain_btn = document.getElementById("playAgain_btn")

// //게임을 다시 시작할때
// playAgain_btn.addEventListener("click", function () {
//     playgame.style.display = "none"
//     contents.style.display = "block"

// })
// function setGame() {

//     playgame.querySelector("#my>div").className += ""
//     playgame.querySelector("#my").style.display = "none"

//     playgame.querySelector("#random>div").style.display = "none"
//     if (document.getElementsByClassName("waves")) {
//         playgame.querySelector("#my>div").className += ""
//     }
// }

