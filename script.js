let boxOne = document.getElementById('box-one');
let boxTwo = document.getElementById('box-two');

document.querySelector('.all-left')
    .addEventListener('click', () => {
        moveAll(boxTwo, boxOne);
        updateButtons();
    });

document.querySelector('.all-right')
    .addEventListener('click', () => {
        moveAll(boxOne, boxTwo);
        updateButtons();
    });

document.querySelector('.left')
    .addEventListener('click', () => {
        checkedMove(boxTwo, boxOne);
        updateButtons();
    });

document.querySelector('.right')
    .addEventListener('click', () => {
        checkedMove(boxOne, boxTwo);
        updateButtons();
    })

function checkedMove(box1, box2) {
    box1.querySelectorAll('input[type="checkbox"]:checked')
        .forEach(input => {
            input.checked = false;
            box2.appendChild(input.parentNode);
        });
}

function updateButtons() {
    let hasBoxOne = boxOne.querySelector('div') !== null;
    let hasBoxTwo = boxTwo.querySelector('div') !== null;

    if (hasBoxOne) {
        document.querySelector('.right').removeAttribute('disabled');
        document.querySelector('.all-right').removeAttribute('disabled');
    } else {
        document.querySelector('.right').setAttribute('disabled', 'true');
        document.querySelector('.all-right').setAttribute('disabled', 'true');
    }

    if (hasBoxTwo) {
        document.querySelector('.left').removeAttribute('disabled');
        document.querySelector('.all-left').removeAttribute('disabled');
    } else {
        document.querySelector('.left').setAttribute('disabled', 'true');
        document.querySelector('.all-left').setAttribute('disabled', 'true');
    }
}

function moveAll(box1, box2) {
    box1.querySelectorAll('div').forEach(div => {
        box2.appendChild(div);
    });
}

boxOne.addEventListener('change', () => {
    let clicked = boxOne.querySelectorAll('input[type=checkbox]:checked');
    if (clicked.length > 0) {
        document.querySelector('.left').setAttribute('disabled', false);
    } else {
        document.querySelector('.left').removeAttribute('disabled');
    }
});

boxTwo.addEventListener('change', () => {
    let clicked = boxTwo.querySelectorAll('input[type=checkbox]:checked');
    if (clicked.length > 0) {
        document.querySelector('.right').setAttribute('disabled', false);
    } else {
        document.querySelector('.right').removeAttribute('disabled');
    }
});