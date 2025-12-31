let boxes = document.querySelectorAll('.buttons button');
let mainmodel = document.querySelector('#model');
let reset = document.querySelector('.resetbtn');
let winner = document.querySelector('#winner')
let player = true;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((btns) => {
    btns.addEventListener('click', () => {
        if (player) {
            btns.innerText = 'X'
            player = false;
        }
        else {
            btns.innerText = 'O'
            player = true
        }
        btns.disabled = true;
        checkWinner()
    });
});

function checkWinner() {
    for (let pattern of winPattern) {
        let post1 = boxes[pattern[0]].innerText ;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText;

        if (post1 != "" && post2 != "" && post3 != "") {
            if (post1 == post2 && post2 == post3 ) {
                mainmodel.style.display = 'flex'
                winner.innerText = post1;
            }
        }
    }
}

mainmodel.addEventListener('click', () => {
    mainmodel.style.display = 'none';
    boxes.forEach((box) => {
        box.innerText = ""
        box.disabled = false;
        player = true;
    });
});

reset.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerText = ""
        box.disabled = false;
        player = true
    })
})