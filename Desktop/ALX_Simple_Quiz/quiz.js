// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Retrieve the selected radio button value
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if the user selected an option
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare user answer with the correct answer
        const feedback = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no option is selected
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
