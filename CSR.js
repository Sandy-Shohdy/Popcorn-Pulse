const movies = [
  {
    img: "imgs/Interstellar.jpeg",
    alt: "Interstellar-pic",
    title: "Interstellar",
    rating: "⭐ 8.7/10",
    genre: "Sci-Fi • 2014",
    description:
      'Description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival."',
  },
  {
    img: "imgs/Fight Club.jpg",
    alt: "Fight Club-pic",
    title: "Fight Club",
    rating: "⭐ 8.8/10",
    genre: "Action/Crime • 1999",
    description:
      'Description: "An insomniac office worker forms a secret fight club with a mysterious soap salesman, leading to chaos that challenges identity, society, and personal freedom."',
  },
  {
    img: "imgs/Se7en.jpg",
    alt: "Se7en-pic",
    title: "Se7en",
    rating: "⭐ 8.6/10",
    genre: "Crime/Mystery • 1995",
    description:
      'Description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives in a series of increasingly gruesome murders."',
  },
  {
    img: "imgs/American_Psycho.png",
    alt: "American Psycho-pic",
    title: "American Psycho",
    rating: "⭐ 7.6/10",
    genre: "Crime/Drama • 2000",
    description:
      'Description: "A wealthy New York investment banker hides his psychopathic ego from his co-workers as he descends into a violent, hedonistic world of serial murder and consumerist obsession."',
  },
  {
    img: "imgs/The_Matrix_digital_release_cover.webp",
    alt: "The Matrix-pic",
    title: "The Matrix",
    rating: "⭐ 8.7/10",
    genre: "Action/Sci-Fi • 1999",
    description:
      'Description: "A computer hacker discovers that his world is a simulated reality and joins a rebellion to overthrow the machines that have enslaved humanity."',
  },
  {
    img: "imgs/Monkey Man.jpeg",
    alt: "Monkey Man-pic",
    title: "Monkey Man",
    rating: "⭐ 6.9/10",
    genre: "Action/Thriller • 2024",
    description:
      'Description: "An anonymous young man who ekes out a living in an underground fight club embarks on a campaign of vengeance against the corrupt elite who took everything from him."',
  },
  {
    img: "imgs/Shutter_Island.jpg",
    alt: "Shutter Island-pic",
    title: "Shutter Island",
    rating: "⭐ 8.2/10",
    genre: "Mystery/Thriller • 2010",
    description:
      'Description: "A U.S. Marshal investigates the disappearance of a patient from a psychiatric facility, uncovering disturbing secrets."',
  },
  {
    img: "imgs/Prisoners.jpeg",
    alt: "Prisoners-pic",
    title: "Prisoners",
    rating: "⭐ 8.1/10",
    genre: "Crime/Thriller • 2013",
    description:
      'Description: "When two young girls disappear, a desperate father takes matters into his own hands as police search for the truth."',
  },
  {
    img: "imgs/Nightcrawler.jpg",
    alt: "Nightcrawler-pic",
    title: "Nightcrawler",
    rating: "⭐ 7.8/10",
    genre: "Crime/Drama • 2014",
    description:
      'Description: "A driven man discovers the world of crime journalism and blurs the line between observer and participant."',
  },
  {
    img: "imgs/Gone_Girl.jpeg",
    alt: "Gone Girl-pic",
    title: "Gone Girl",
    rating: "⭐ 8.1/10",
    genre: "Mystery/Drama • 2014",
    description:
      'Description: "A husband becomes the prime suspect when his wife mysteriously disappears on their anniversary."',
  },
  {
    img: "imgs/Joker.jpg",
    alt: "Joker-pic",
    title: "Joker",
    rating: "⭐ 8.4/10",
    genre: "Crime/Drama • 2019",
    description:
      'Description: "A struggling comedian descends into madness and becomes a symbol of chaos in Gotham City."',
  },
  {
    img: "imgs/The_Prestige.jpeg",
    alt: "The Prestige-pic",
    title: "The Prestige",
    rating: "⭐ 8.5/10",
    genre: "Drama/Mystery • 2006",
    description:
      'Description: "Two rival magicians engage in a dangerous battle of deception and obsession."',
  },
  {
    img: "imgs/Memento.jpg",
    alt: "Memento-pic",
    title: "Memento",
    rating: "⭐ 8.4/10",
    genre: "Mystery/Thriller • 2000",
    description:
      'Description: "A man with short-term memory loss attempts to track down his wife\'s killer using notes and tattoos."',
  },
  {
    img: "imgs/Taxi_Driver.jpg",
    alt: "Taxi Driver-pic",
    title: "Taxi Driver",
    rating: "⭐ 8.2/10",
    genre: "Crime/Drama • 1976",
    description:
      'Description: "A lonely Vietnam veteran working as a taxi driver descends into obsession and violence."',
  },
  {
    img: "imgs/Oldboy.jpeg",
    alt: "Oldboy-pic",
    title: "Oldboy",
    rating: "⭐ 8.4/10",
    genre: "Action/Mystery • 2003",
    description:
      'Description: "After being imprisoned for 15 years without explanation, a man seeks revenge and uncovers a shocking truth."',
  },
  {
    img: "imgs/Black Swan.jpeg",
    alt: "Black Swan-pic",
    title: "Black Swan",
    rating: "⭐ 8.0/10",
    genre: "Drama/Thriller • 2010",
    description:
      'Description: "A dedicated ballerina\'s pursuit of perfection spirals into psychological breakdown."',
  },
];

const moviesContainer = document.getElementById("movie-container");

let html = "";

movies.forEach((movie) => {
  html += `
      <div class="movie-card">
      <div>
        <img  class="movie-img" src="${movie.img}" alt="${movie.title}">
        </div>
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <p class="rating">${movie.rating}</p>
          <p class="genre">${movie.genre}</p>
          <p class="describe">${movie.description}</p>
        </div>
      </div>
    `;
});

moviesContainer.innerHTML = html;
