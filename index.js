const hamburger = document.querySelector('div.hamburger');
const hamburgerClose = document.querySelector('.hamburger-close span');
const mobileNav = document.querySelector('.hamburger_nav_links');
const speakersContainer = document.querySelector('.artist-grid');
const revealArtist = document.querySelector('.artist-controller');
const hideArtist = document.querySelector('.artist-controller-less');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

hamburgerClose.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

const artists = [
  {
    name: 'Nathaniel Bassey',
    title: 'Nigeria lead worship singer at Loveworld Embassy',
    bio: 'GUC is a nigerian artist whose music ministry has affected countless of nigerians and also the worls at large',
    image: 'images/nathan.jpeg',
  },
  {
    name: 'Mercy Chinwo',
    title: 'Nigeria lead worship singer at Loveworld Embassy',
    bio: 'GUC is a nigerian artist whose music ministry has affected countless of nigerians and also the worls at large',
    image: 'images/mercy.jpg',
  },
  {
    name: 'Dunsin Oyekan',
    title: 'Nigeria lead worship singer at Loveworld Embassy',
    bio: 'GUC is a nigerian artist whose music ministry has affected countless of nigerians and also the worls at large',
    image: 'images/dunsin.jpg',
  },
  {
    name: 'Moses Bliss',
    title: 'Nigeria lead worship singer at Loveworld Embassy',
    bio: 'GUC is a nigerian artist whose music ministry has affected countless of nigerians and also the worls at large',
    image: 'images/moses.webp',
  },
  {
    name: 'Minister GUC',
    title: 'Nigeria lead worship singer at Loveworld Embassy',
    bio: 'GUC is a nigerian artist whose music ministry has affected countless of nigerians and also the worls at large',
    image: 'images/guc.jpg',
  },
  {
    name: 'Ada Ehi',
    title: 'Nigeria lead worship singer at Loveworld Embassy',
    bio: 'GUC is a nigerian artist whose music ministry has affected countless of nigerians and also the worls at large',
    image: 'images/Ada-Ehi.webp',
  },
];

for (let i = 0; i < artists.length; i += 1) {
  const li = document.createElement('li');
  li.classList.add('grid-item');
  li.innerHTML = `<div class="grid-img">
                      <img src="${artists[i].image}" alt="${artists[i].name}">
                      <div class="img-gap"></div>
                    </div>
                    <div class="grid-details">
                      <h3>${artists[i].name}</h3>
                      <span class="title">${artists[i].title}</span>
                      <span class="artist-decorator"></span>
                      <p>${artists[i].bio}</p>
                    </div>`;
  speakersContainer.appendChild(li);
}

const listOfArtists = document.querySelectorAll('.grid-item');

listOfArtists.forEach((artist, i) => {
  if (i > 2) {
    artist.classList.add('hide');
  }
});

revealArtist.addEventListener('click', () => {
  listOfArtists.forEach((artist) => {
    artist.classList.remove('hide');
    revealArtist.classList.add('hide');
    hideArtist.classList.remove('hide');
  });
});

hideArtist.addEventListener('click', () => {
  listOfArtists.forEach((artist, i) => {
    if (i > 2) {
      artist.classList.add('hide');
    }
  });
  hideArtist.classList.add('hide');
  revealArtist.classList.remove('hide');
});