document.addEventListener('DOMContentLoaded', function() {
    const finalScore = document.getElementById('finalscore');
    const finalScoreInput = document.getElementById('finalScoreInput');
    const saveScoreBtn = document.getElementById('savebtn');

    // Retrieve and display the final score
    const mostRecentScore = localStorage.getItem('mostRecentScore');
    finalScore.innerText = mostRecentScore;
    finalScoreInput.value = mostRecentScore; // Set the value to be sent with the form

    // Add event listener to the form submission
    saveScoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        saveScore();
    });

    // Function to handle score saving
    function saveScore() {
        // Get the final score from the input field
        const score = finalScoreInput.value;

        // Prepare the form for submission
        const form = document.querySelector('form');
        form.submit();
    }
});
