showRandomXKCD();

function showRandomXKCD() { 
    const totalComics = 100; // Total number of comics you have
    const randomComicNumber = Math.floor(Math.random() * totalComics) + 2700; // Generate a random number between 1 and 100
    const imagePath = `xkcd_comics/${randomComicNumber}.png`; // Construct the path to a random image

    // Set the image source and link URL
    document.getElementById('random-xkcd-img').src = imagePath;
    document.getElementById('random-xkcd-link').href = `https://xkcd.com/${randomComicNumber}/`;
}

// Fetch top 3 Hacker News stories
fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
  .then(response => response.json())
  .then(ids => {
    ids.slice(0, 3).forEach(id => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(response => response.json())
        .then(data => {
          const hnList = document.getElementById('hacker-news');
          const listItem = document.createElement('li');
          const link = document.createElement('a');
          link.href = data.url;
          link.target = '_blank';
          link.textContent = data.title;
          listItem.appendChild(link);
          hnList.appendChild(listItem);
        });
    });
  })
  .catch(error => console.error('Error loading Hacker News stories:', error));

  document.getElementById('dark-mode-toggle').addEventListener('change', function(event) {
    document.body.classList.toggle('dark-mode', event.target.checked);
  });
  