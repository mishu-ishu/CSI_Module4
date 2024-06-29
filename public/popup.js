document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault()

  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
})

document.getElementById('overlay').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'none'
  document.getElementById('popup').style.display = 'none'
})



