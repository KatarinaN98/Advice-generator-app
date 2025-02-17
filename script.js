document.getElementById('dice-btn').addEventListener('click', fetchAdvice);

function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('advice-id').textContent = `Advice #${data.slip.id}`;
            document.getElementById('advice-text').textContent = `"${data.slip.advice}"`;
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
        });
}
