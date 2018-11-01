
window.onload = function () {

    let sign = '';
    let signClicked = false;
    let previousValue = '';

    // getting the reference of text box which displays output
    let display = document.getElementById('display');

    // get all elements with class btn
    let buttons = document.getElementsByClassName('btn');
    // lopping all elements with btn class in order to add click event listener
    for (let i = 0; i < buttons.length; i++) {
        // adding click event handler
        buttons[i].addEventListener('click', function () {
            // this represent current clicked element,
            // getting data from data-value, custom attribute from clicked element
            let value = this.getAttribute('data-value');

            if (signClicked) {
                display.value = '';
                signClicked = false;
            }

            // If there is nothing on display box do nothing,else append the zero
            if (display.value.trim() === '0') {
                display.value = "";
            }

            // adding clicked value to the current data which is being displayed
            display.value = display.value + value;
        });
    }

    // handle zero button click event
    var zeroBtn = document.getElementById('zero');
    zeroBtn.addEventListener('click', function () {
        // If there is nothing on display box do nothing,else append the zero
        if (display.value.trim() === '0') {
            return;
        }

        var value = this.getAttribute('data-value');
        // adding clicked value to the current data which is being displayed

        display.value = display.value + value;
    });

    // handle zero button click event
    var dotBtn = document.getElementById('dot');
    dotBtn.addEventListener('click', function () {
        // If there is nothing on display box do nothing,else append the zero
        if (display.value.trim() === '') {
            return;
        }
        // There is already a dot , do nothing
        if (display.value.indexOf('.') !== -1) {
            return;
        }
        let value = this.getAttribute('data-value');
        // adding clicked value to the current data which is being displayed
        display.value = display.value + value;
    });

// clear everything
    document.getElementById('clearAll')
        .addEventListener('click', function () {
            display.value = '';
        });
// add event to cleaOne button
    document.getElementById('clearOne')
        .addEventListener('click', function () {
            // substring method used to grab a string from a string
            let currentValue = display.value;
            display.value = currentValue.substring(0, currentValue.length - 1);
        });


    // coding sign buttons and store the clicked one
    let signs = document.getElementsByClassName('sign');
    for (let x = 0; x < signs.length; x++) {
        // adding click event handler
        signs[x].addEventListener('click', function () {
            // this represent current clicked element,
            sign = this.innerHTML;
            if (display.value.trim() !== '' || display.value.trim() !== '0') {
                previousValue = display.value;
                signClicked = true;
            }
        });
    }
// coding equal button
    document.getElementById('equal')
        .addEventListener('click', function () {
            let currentValue = display.value.trim();
            if (previousValue !== '' && currentValue !== '') {
                switch (sign) {
                    case '+':
                        display.value = parseFloat(previousValue) + parseFloat(currentValue);
                        break;
                    case '-':
                        display.value = parseFloat(previousValue) - parseFloat(currentValue);
                        break;
                    case '*':
                        display.value = parseFloat(previousValue) * parseFloat(currentValue);
                        break;
                    case '/':
                        display.value = parseFloat(previousValue) / parseFloat(currentValue);
                        break;
                }
            }
        });
};
