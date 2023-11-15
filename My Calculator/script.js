function updateDisplay(value) {
    document.getElementById('display').value = value;
}

function appendToDisplay(char) {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay + char;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let expression = document.getElementById('display').value;

    // Send the expression to the server for calculation using PHP
    fetch('calculate.php', {
        method: 'POST',
        body: JSON.stringify({ expression: expression }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        updateDisplay(data.result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
