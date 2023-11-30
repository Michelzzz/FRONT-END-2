fetch('https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens')
 .then(response => response.json())
 .then(data => {
  const table = document.getElementById('myTable');
  data.forEach(item => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = item.nome;
    const emailCell = document.createElement('td');
    emailCell.textContent = item.email;
    const messageCell = document.createElement('td');
    messageCell.textContent = item.mensagem;
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(messageCell);
    table.appendChild(row);
  });
 })
 .catch(error => console.error('Erro:', error));



 document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  checkCredentials();
 });

 
 function checkCredentials() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (email === 'admin@admin.com' && password == '1234') {
  window.location.href = 'adm.html';
  } else {
  document.getElementById('errorMessage').textContent = 'Email ou senha incorretos.';
  }
 }
 

 document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();
  sendMessage();
 });
 
 function inserirMensagem(obj) {
  var inserir = $.ajax({
      url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens',
      method: 'POST',
      data: JSON.stringify(obj),
      dataType: 'json',
      async: false,
      contentType: 'application/json',
  });
}