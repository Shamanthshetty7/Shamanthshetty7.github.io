window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
  
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  });
  