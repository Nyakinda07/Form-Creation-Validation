document.addEventListener('DOMContentLoaded', () => {
    const fetchUserData = async () => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            // Convert response to JSON
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a list element
            const userList = document.createElement('ul');

            // Loop through the users and add their names to the list
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    };

    // Invoke the fetchUserData function
    fetchUserData();
});