const API_URL = 'http://localhost:3000/'

async function fetchUsers() {

  try {
    const response = await fetch(`${API_URL}users`);
    const data = await response.json()

    // AGGIUNGERE UTENTI ALLA TABELLA
    displayUsers(data);

  } catch (error) {
    console.log('Errore nel recupero degli utenti: ', error);
  }
}


function displayUsers(users) {
  
  const tableBody = document.getElementById('users-table-body');
  tableBody.innerHTML = ''

  users.forEach(user => {
    
    const row = `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>
        <td>${user.phone}</td>
        <td>${user.address.city}</td>
        <td>${user.company.name}</td>
        <td>
          <!-- Inserire pulsanti per modifica e cancellazione -->
        </td>

      </tr>
    `

    tableBody.innerHTML += row
  });

}
fetchUsers()