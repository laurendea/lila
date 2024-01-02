document.addEventListener('DOMContentLoaded', function () {
    const meditationForm = document.getElementById('meditationForm');

    meditationForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        try {
            const date = document.getElementById('date').value;
            const duration = document.getElementById('duration').value;
            const notes = document.getElementById('notes').value;

            // Make a POST request to create a new entry
            const response = await fetch('http://localhost:7008/create-meditation-entry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date,
                    duration,
                    notes,
                }),
            });

            if (response.ok) {
                // If successful, redirect back to the meditation entries page
                window.location.href = 'meditationEntries.html';
            } else {
                console.error('Error creating meditation entry:', response.status);
            }
        } catch (error) {
            console.error('Error creating meditation entry:', error);
        }
    });
});