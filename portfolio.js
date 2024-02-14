// Fetch the latest XKCD comic
fetch('https://xkcd.com/info.0.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('xkcd').innerHTML = `
      <h2>${data.title}</h2>
      <img src="${data.img}" alt="${data.alt}" style="max-width:100%;">
    `;
  })
  .catch(error => console.error('Error loading XKCD comic:', error));

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
