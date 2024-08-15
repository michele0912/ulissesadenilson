document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === 'admin' && password === 'admin') {
        window.location.href = 'home.html';
    } else {
        alert('Credenciais inválidas!');
    }
});

function showGames() {
    const gamesList = document.getElementById('gamesList');
    gamesList.style.display = gamesList.style.display === 'none' ? 'block' : 'none';
}

function logout() {
    window.location.href = 'index.html';
}

function goBack() {
    window.history.back();
}
