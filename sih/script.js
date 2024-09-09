document.getElementById('search').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const pgItems = document.querySelectorAll('.pg-item');

  pgItems.forEach(item => {
      const name = item.querySelector('h3').textContent.toLowerCase();
      if (name.includes(query)) {
          item.style.display = '';
      } else {
          item.style.display = 'none';
      }
  });
});
