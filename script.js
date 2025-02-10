let boxOne = document.getElementById('box-one');
        let boxTwo = document.getElementById('box-two');

        document.querySelector('.all-left')
        .addEventListener('click', () => moveAll(boxTwo, boxOne));

        document.querySelector('.all-right')
        .addEventListener('click', () => moveAll(boxOne, boxTwo));

        document.querySelector('.left')
        .addEventListener('click', () => checkedMove(boxTwo, boxOne));

        document.querySelector('.right')
        .addEventListener('click', () => checkedMove(boxOne, boxTwo))
        
        function checkedMove (box1, box2) {
            box1.querySelectorAll('input[type="checkbox"]:checked')
            .forEach(input => {
                input.checked =false;
                box2.appendChild(input.parentNode);
            });
        }

        function moveAll (box1, box2) {
            box1.querySelectorAll('div').forEach(div => {
                box2.appendChild(div);
            });
        }

        boxOne.addEventListener('change', () => {
            let clicked = boxOne.querySelectorAll('input[type=checkbox]:checked');
            if(clicked.length > 0) {
                document.querySelector('.left').setAttribute('disabled', false);
            } else {
                document.querySelector('.left').removeAttribute('disabled');
            }
        });

        boxTwo.addEventListener('change', () => {
            let clicked = boxTwo.querySelectorAll('input[type=checkbox]:checked');
            if(clicked.length > 0) {
                document.querySelector('.right').setAttribute('disabled', false);
            } else {
                document.querySelector('.right').removeAttribute('disabled');
            }
        });