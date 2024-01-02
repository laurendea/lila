document.addEventListener('DOMContentLoaded', function () {
    const meditationEntriesContainer = document.getElementById('meditationEntries');
    const createMeditationEntryButton = document.getElementById('createMeditationEntry');

    // Function to fetch and display meditation entries
    const fetchAndDisplayMeditationEntries = async () => {
        try {
            const response = await fetch('http://localhost:7008/meditation-entries');

            if (response.ok) {
                const meditationEntries = await response.json();
                displayMeditationEntries(meditationEntries);
            } else {
                console.error('Error fetching meditation entries:', response.status);
            }
        } catch (error) {
            console.error('Error fetching meditation entries:', error);
        }
    };

    // Function to display meditation entries
    const displayMeditationEntries = (entries) => {
        meditationEntriesContainer.innerHTML = '';

        entries.forEach(entry => {
            const entryElement = document.createElement('div');
            entryElement.innerHTML = `<p>${entry.date} - ${entry.duration} - ${entry.notes}</p>`;
            
            // Add an event listener to edit the entry when clicked
            entryElement.addEventListener('click', () => editMeditationEntry(entry._id));

            meditationEntriesContainer.appendChild(entryElement);
        });
    };

    // Function to edit a meditation entry
    const editMeditationEntry = (entryId) => {
        // Implement your logic to navigate to the edit page or open a modal for editing
        console.log(`Editing entry with ID: ${entryId}`);
    };

    // Event listener for creating a new entry
    createMeditationEntryButton.addEventListener('click', async function () {
        try {
            // Make a POST request to create a new entry
            const response = await fetch('http://localhost:7008/create-meditation-entry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // Add your entry data here
                    date: new Date(),
                    duration: '10 minutes',
                    notes: 'A new meditation entry',
                }),
            });

            if (response.ok) {
                // If successful, fetch and display updated entries
                fetchAndDisplayMeditationEntries();
            } else {
                console.error('Error creating meditation entry:', response.status);
            }
        } catch (error) {
            console.error('Error creating meditation entry:', error);
        }
    });

    // Fetch and display meditation entries when the page loads
    fetchAndDisplayMeditationEntries();
});