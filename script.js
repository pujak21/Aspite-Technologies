window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculatebmi);
}

function calculatebmi() {
    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height <= 0) {
        result.innerText = "Please enter a valid height";
        return;
    } else if (!weight || isNaN(weight) || weight <= 0) {
        result.innerText = "Please enter a valid weight";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    result.innerText = `Your BMI is ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        result.innerText += " - Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText += " - Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText += " - Overweight";
    } else {
        result.innerText += " - Obese";
    }
}
