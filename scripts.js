document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('toggle-dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        btn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        btn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('toggle-dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        btn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        btn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});