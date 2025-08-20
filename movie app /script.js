// State management
const state = {
  isLoggedIn: false,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  allMovies: [],
  watchedItems: JSON.parse(localStorage.getItem('watchedItems')) || [],
  darkMode: JSON.parse(localStorage.getItem('darkMode')) || true,
  currentRoute: '/',
  currentMovieId: null,
  currentMovie: null,
  progressInterval: null,
  topMovies: [
    { 
      imdbID: "tt0111161", 
      Title: "The Shawshank Redemption", 
      Year: "1994",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
      Plot: "Two imprisoned men bond over a number of years...",
      Genre: "Drama",
      Runtime: "142 min",
      Director: "Frank Darabont",
      Actors: "Tim Robbins, Morgan Freeman",
      imdbRating: "9.3",
      trailerId: "6hB3S9bIaco"
    },
    { 
      imdbID: "tt0068646", 
      Title: "The Godfather", 
      Year: "1972",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      Plot: "The aging patriarch of an organized crime dynasty...",
      Genre: "Crime, Drama",
      Runtime: "175 min",
      Director: "Francis Ford Coppola",
      Actors: "Marlon Brando, Al Pacino",
      imdbRating: "9.2",
      trailerId: "sY1S34973zA"
    },
    { 
      imdbID: "tt0071562", 
      Title: "The Godfather Part II", 
      Year: "1974",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      Plot: "The early life and career of Vito Corleone...",
      Genre: "Crime, Drama",
      Runtime: "202 min",
      Director: "Francis Ford Coppola",
      Actors: "Al Pacino, Robert De Niro",
      imdbRating: "9.0",
      trailerId: "9O1Iy9od7-A"
    },
    { 
      imdbID: "tt0468569", 
      Title: "The Dark Knight", 
      Year: "2008",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      Plot: "When the menace known as the Joker wreaks havoc...",
      Genre: "Action, Crime, Drama",
      Runtime: "152 min",
      Director: "Christopher Nolan",
      Actors: "Christian Bale, Heath Ledger",
      imdbRating: "9.0",
      trailerId: "EXeTwQWrcwY"
    },
    { 
      imdbID: "tt0050083", 
      Title: "12 Angry Men", 
      Year: "1957",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
      Plot: "A jury holdout attempts to prevent a miscarriage...",
      Genre: "Crime, Drama",
      Runtime: "96 min",
      Director: "Sidney Lumet",
      Actors: "Henry Fonda, Lee J. Cobb",
      imdbRating: "9.0",
      trailerId: "TEN-2uTi2c0"
    },
    { 
      imdbID: "tt0108052", 
      Title: "Schindler's List", 
      Year: "1993",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      Plot: "In German-occupied Poland during World War II...",
      Genre: "Biography, Drama, History",
      Runtime: "195 min",
      Director: "Steven Spielberg",
      Actors: "Liam Neeson, Ralph Fiennes",
      imdbRating: "9.0",
      trailerId: "gG22XNhtnoY"
    },
    { 
      imdbID: "tt0167260", 
      Title: "The Lord of the Rings: The Return of the King", 
      Year: "2003",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      Plot: "Gandalf and Aragorn lead the World of Men...",
      Genre: "Adventure, Fantasy",
      Runtime: "201 min",
      Director: "Peter Jackson",
      Actors: "Elijah Wood, Viggo Mortensen",
      imdbRating: "9.0",
      trailerId: "r5X-hFf6Bwo"
    },
    { 
      imdbID: "tt0110912", 
      Title: "Pulp Fiction", 
      Year: "1994",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      Plot: "The lives of two mob hitmen, a boxer...",
      Genre: "Crime, Drama",
      Runtime: "154 min",
      Director: "Quentin Tarantino",
      Actors: "John Travolta, Uma Thurman",
      imdbRating: "8.9",
      trailerId: "s7EdQ4FqbhY"
    },
    { 
      imdbID: "tt0120737", 
      Title: "The Lord of the Rings: The Fellowship of the Ring", 
      Year: "2001",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
      Plot: "A meek Hobbit from the Shire and eight companions...",
      Genre: "Adventure, Fantasy",
      Runtime: "178 min",
      Director: "Peter Jackson",
      Actors: "Elijah Wood, Ian McKellen",
      imdbRating: "8.8",
      trailerId: "V75dMMIW2B4"
    },
    { 
      imdbID: "tt0137523", 
      Title: "Fight Club", 
      Year: "1999",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
      Plot: "An insomniac office worker and a devil-may-care soapmaker...",
      Genre: "Drama",
      Runtime: "139 min",
      Director: "David Fincher",
      Actors: "Brad Pitt, Edward Norton",
      imdbRating: "8.8",
      trailerId: "qtRKdVHc-cE"
    }
  ]
};

// DOM Elements
const navbarEl = document.getElementById('navbar');
const contentEl = document.getElementById('content');

// Initialize the app
function init() {
  applyTheme();
  checkAuth();
  setupEventListeners();
  renderNav();
  renderContent();
  window.addEventListener('popstate', handlePopState);
}

// Theme management
function applyTheme() {
  document.documentElement.setAttribute(
    'data-theme',
    state.darkMode ? 'dark' : 'light'
  );
}

function toggleTheme() {
  state.darkMode = !state.darkMode;
  localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
  applyTheme();
  renderNav();
}

// Auth management
function checkAuth() {
  const user = localStorage.getItem('user');
  state.isLoggedIn = !!user;
}

function getUsername() {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.email ? user.email.split('@')[0] : 'My Account';
}

function handleLogin(email, redirectPath = '/') {
  state.isLoggedIn = true;
  localStorage.setItem('user', JSON.stringify({ email }));
  navigateTo(redirectPath);
}

function handleLogout() {
  state.isLoggedIn = false;
  localStorage.removeItem('user');
  navigateTo('/');
}

// Routing
function setupRouter() {
  state.currentRoute = window.location.pathname;
}

function navigateTo(path) {
  state.currentRoute = path;
  window.history.pushState({}, '', path);
  renderContent();
}

function handlePopState() {
  state.currentRoute = window.location.pathname;
  renderContent();
}

// Event listeners
function setupEventListeners() {
  // Navigation
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')) {
      e.preventDefault();
      const path = e.target.getAttribute('href');
      navigateTo(path);
    }
  });

  // Logout button
  document.addEventListener('click', (e) => {
    if (e.target.id === 'logout-btn') {
      e.preventDefault();
      handleLogout();
    }
  });

  // Mobile menu toggle
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('mobile-menu-toggle') || 
        e.target.closest('.mobile-menu-toggle')) {
      const navList = document.querySelector('.nav-list-horizontal');
      navList.classList.toggle('open');
    }
  });

  // Search functionality
  document.addEventListener('click', (e) => {
    if (e.target.id === 'search-button' || e.target.closest('#search-button')) {
      const searchInput = document.getElementById('search-input');
      if (searchInput.value.trim()) {
        searchMovies(searchInput.value);
      }
    }
  });

  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.id === 'search-input') {
      if (e.target.value.trim()) {
        searchMovies(e.target.value);
      }
    }
  });

  // Sign in form
  document.addEventListener('submit', (e) => {
    if (e.target.id === 'sign-form') {
      e.preventDefault();
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      
      if (!email.includes('@')) {
        showError('sign-error', 'Please enter a valid email address.');
        return;
      }
      
      if (password.length < 6) {
        showError('sign-error', 'Password must be at least 6 characters long.');
        return;
      }
      
      handleLogin(email);
    }
  });

  // Register form
  document.addEventListener('submit', (e) => {
    if (e.target.id === 'register-form') {
      e.preventDefault();
      const form = e.target;
      const email = form.elements.email.value;
      const password = form.elements.password.value;
      const confirmPass = form.elements.confirmPass.value;
      
      if (!email.includes('@')) {
        showError('register-error', 'Please enter a valid email.');
        return;
      }
      
      if (password.length < 6) {
        showError('register-error', 'Password must be at least 6 characters.');
        return;
      }
      
      if (password !== confirmPass) {
        showError('register-error', 'Passwords do not match.');
        return;
      }
      
      // In a real app, you would register the user here
      navigateTo('/sign');
    }
  });

  // Home button in empty states
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('home-button') || 
        e.target.closest('.home-button')) {
      navigateTo('/');
    }
  });
}

function showError(elementId, message) {
  const errorEl = document.getElementById(elementId);
  errorEl.textContent = message;
  errorEl.style.display = 'block';
}

// Render functions
function renderNav() {
  const template = `
    <nav class="navbar-horizontal">
      <div class="nav-left">
        <button class="mobile-menu-toggle" aria-label="Toggle menu">
          <i class="fas fa-bars"></i>
        </button>
        <span class="site-title">Place of Dreams</span>
      </div>
      
      <ul class="nav-list-horizontal">
        <li class="nav-item">
          <a href="/" class="nav-button">Home</a>
        </li>
        
        <li class="nav-item dropdown">
          <span class="nav-button">Genres ▾</span>
          <ul class="dropdown-content">
            <li>Action</li>
            <li>Comedy</li>
            <li>Drama</li>
            <li>Horror</li>
            <li>Sci-Fi</li>
          </ul>
        </li>
        
        ${state.isLoggedIn ? `
          <li class="nav-item">
            <a href="/favorites" class="nav-button">
              <i class="fas fa-star" style="margin-right: 6px"></i>
              Favorites
            </a>
          </li>
          
          <li class="nav-item">
            <a href="/watched" class="nav-button">
              <i class="fas fa-user" style="margin-right: 6px"></i>
              ${getUsername()}
            </a>
          </li>
          
          <li class="nav-item">
            <button class="nav-button" id="logout-btn">Sign out</button>
          </li>
          
          <li class="nav-item theme-toggle-item">
            <button class="theme-toggle nav-button" onclick="toggleTheme()">
              ${state.darkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>'}
            </button>
          </li>
        ` : `
          <li class="nav-item">
            <a href="/register" class="nav-button">Register</a>
          </li>
          <li class="nav-item">
            <a href="/sign" class="nav-button">Sign in</a>
          </li>
        `}
      </ul>
    </nav>
  `;
  
  navbarEl.innerHTML = template;
}

function renderContent() {
  const path = state.currentRoute;
  
  if (path === '/' || path === '/home') {
    renderHome();
  } else if (path === '/sign') {
    renderSignIn();
  } else if (path === '/register') {
    renderRegister();
  } else if (path === '/favorites') {
    renderFavorites();
  } else if (path === '/watched') {
    renderWatched();
  } else if (path.startsWith('/watch/')) {
    const movieId = path.split('/watch/')[1];
    renderWatchNow(movieId);
  } else {
    renderHome();
  }
}

function renderHome() {
  const template = document.getElementById('home-template').content.cloneNode(true);
  contentEl.innerHTML = '';
  contentEl.appendChild(template);
  
  // Render top movies carousel
  const carousel = contentEl.querySelector('.movies-carousel');
  state.topMovies.forEach(movie => {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title}" class="carousel-poster">
      <div class="carousel-title">${movie.Title}</div>
    `;
    item.addEventListener('click', () => navigateTo(`/watch/${movie.imdbID}`));
    carousel.appendChild(item);
  });
  
  // Set up auto-scrolling for the carousel
  setupCarouselAutoScroll();
  
  // Set up carousel buttons
  const leftBtn = contentEl.querySelector('.carousel-button.left');
  const rightBtn = contentEl.querySelector('.carousel-button.right');
  
  leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -220, behavior: 'smooth' });
  });
  
  rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 220, behavior: 'smooth' });
  });
  
  // Initial movie load
  searchMovies('batman');
}

function setupCarouselAutoScroll() {
  const carousel = contentEl.querySelector('.movies-carousel');
  let scrollAmount = 0;
  const scrollWidth = carousel.scrollWidth;
  const clientWidth = carousel.clientWidth;
  
  // Only auto-scroll if there's overflow
  if (scrollWidth > clientWidth) {
    const interval = setInterval(() => {
      scrollAmount += 220;
      if (scrollAmount >= scrollWidth - clientWidth) {
        scrollAmount = 0;
      }
      carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }, 3000);
    
    // Pause on hover
    carousel.addEventListener('mouseenter', () => clearInterval(interval));
    carousel.addEventListener('mouseleave', () => setupCarouselAutoScroll());
  }
}

function renderSignIn() {
  if (state.isLoggedIn) {
    navigateTo('/');
    return;
  }
  
  const template = document.getElementById('sign-template').content.cloneNode(true);
  contentEl.innerHTML = '';
  contentEl.appendChild(template);
  
  // Set up home button
  const homeBtn = contentEl.querySelector('#sign-home-button');
  homeBtn.addEventListener('click', () => navigateTo('/'));
}

function renderRegister() {
  if (state.isLoggedIn) {
    navigateTo('/');
    return;
  }
  
  const template = document.getElementById('register-template').content.cloneNode(true);
  contentEl.innerHTML = '';
  contentEl.appendChild(template);
}

function renderFavorites() {
  if (!state.isLoggedIn) {
    renderEmptyState(
      'Please log in to view favorites',
      'Sign In',
      () => navigateTo('/sign')
    );
    return;
  }
  
  const favoriteMovies = state.allMovies.filter(movie => 
    movie && movie.imdbID && state.favorites.includes(movie.imdbID)
  );
  
  if (favoriteMovies.length === 0) {
    renderEmptyState(
      'No favorites yet',
      'Click the star icon on movies to add them to favorites',
      'Browse Movies',
      () => navigateTo('/')
    );
    return;
  }
  
  const template = document.getElementById('favorites-template').content.cloneNode(true);
  contentEl.innerHTML = '';
  contentEl.appendChild(template);
  
  const container = contentEl.querySelector('#favorites-container');
  renderMovieCards(container, favoriteMovies);
}

function renderWatched() {
  if (!state.isLoggedIn) {
    renderEmptyState(
      'Please log in to view watched history',
      'Sign In',
      () => navigateTo('/sign')
    );
    return;
  }
  
  const sortedWatchedItems = [...state.watchedItems]
    .filter(item => item?.progress > 0)
    .sort((a, b) => new Date(b.lastWatched) - new Date(a.lastWatched));
  
  if (sortedWatchedItems.length === 0) {
    renderEmptyState(
      'No watched items yet',
      'Watch at least 10% of a movie or show to see it here',
      'Browse Content',
      () => navigateTo('/')
    );
    return;
  }
  
  const template = document.getElementById('watched-template').content.cloneNode(true);
  contentEl.innerHTML = '';
  contentEl.appendChild(template);
  
  const container = contentEl.querySelector('#watched-items-container');
  sortedWatchedItems.forEach(item => {
    const cardTemplate = document.getElementById('watched-card-template').content.cloneNode(true);
    const card = cardTemplate.querySelector('.watched-card');
    
    card.querySelector('.watched-poster').src = item.poster;
    card.querySelector('.watched-poster').alt = item.title;
    card.querySelector('.watched-title').textContent = item.title;
    
    const progressBadge = card.querySelector('.progress-badge');
    if (item.progress >= 90) {
      progressBadge.innerHTML = '<span>✓ Completed</span>';
    } else if (item.type === 'movie') {
      progressBadge.innerHTML = `
        <i class="fas fa-clock"></i>
        <span>${Math.round(item.minutesLeft)} min left</span>
      `;
    } else {
      progressBadge.innerHTML = `
        <i class="fas fa-tv"></i>
        <span>S${item.season || 1} E${item.episode || 1}</span>
      `;
    }
    
    card.querySelector('.watched-meta').innerHTML = `
      <span>Last watched: ${new Date(item.lastWatched).toLocaleDateString()}</span>
      <span class="media-type">
        ${item.type === 'movie' ? '<i class="fas fa-film"></i>' : '<i class="fas fa-tv"></i>'}
        ${item.type}
      </span>
    `;
    
    card.querySelector('.progress-text').textContent = `Watched: ${Math.round(item.progress)}%`;
    
    card.addEventListener('click', () => navigateTo(`/watch/${item.id}`));
    container.appendChild(card);
  });
}

function renderWatchNow(movieId) {
  if (!state.isLoggedIn) {
    navigateTo('/sign', { 
      state: { 
        from: `/watch/${movieId}`,
        message: "Please sign in to watch movies" 
      } 
    });
    return;
  }
  
  state.currentMovieId = movieId;
  
  // Clear any existing progress interval
  if (state.progressInterval) {
    clearInterval(state.progressInterval);
    state.progressInterval = null;
  }
  
  // Try to find movie in top movies first
  let movie = state.topMovies.find(m => m.imdbID === movieId);
  
  if (!movie) {
    // Try to find in allMovies
    movie = state.allMovies.find(m => m.imdbID === movieId);
    
    if (!movie) {
      // Fetch movie details
      fetchMovieDetails(movieId);
      return;
    }
  }
  
  state.currentMovie = movie;
  renderMovieWatchPage(movie);
}

function renderMovieWatchPage(movie) {
  const template = document.getElementById('watch-template').content.cloneNode(true);
  contentEl.innerHTML = '';
  contentEl.appendChild(template);
  
  // Set movie details
  contentEl.querySelector('.watch-now-poster').src = movie.Poster !== "N/A" ? movie.Poster : '/placeholder-movie.jpg';
  contentEl.querySelector('#movie-year').textContent = movie.Year;
  contentEl.querySelector('#movie-type').textContent = movie.Type;
  contentEl.querySelector('#movie-rating').textContent = movie.imdbRating || "N/A";
  contentEl.querySelector('#movie-runtime').textContent = movie.Runtime || "N/A";
  contentEl.querySelector('#movie-genre').textContent = movie.Genre || "N/A";
  contentEl.querySelector('#movie-title').textContent = movie.Title;
  contentEl.querySelector('#movie-plot').textContent = movie.Plot || "No description available.";
  contentEl.querySelector('#movie-cast').textContent = movie.Actors || "N/A";
  contentEl.querySelector('#movie-director').textContent = movie.Director || "N/A";
  contentEl.querySelector('#movie-writer').textContent = movie.Writer || "N/A";
  
  // Set trailer iframe
  const iframe = contentEl.querySelector('#trailer-iframe');
  iframe.src = `https://www.youtube.com/embed/${movie.trailerId || 'dQw4w9WgXcQ'}`;
  
  // Set progress
  const savedProgress = localStorage.getItem(`progress_${movie.imdbID}`) || 0;
  contentEl.querySelector('#progress-fill').style.width = `${savedProgress}%`;
  contentEl.querySelector('#progress-text').textContent = savedProgress;
  
  // Start progress tracking
  state.progressInterval = setInterval(() => {
    const progress = parseInt(contentEl.querySelector('#progress-text').textContent);
    const newProgress = Math.min(progress + 1, 100);
    
    contentEl.querySelector('#progress-fill').style.width = `${newProgress}%`;
    contentEl.querySelector('#progress-text').textContent = newProgress;
    localStorage.setItem(`progress_${movie.imdbID}`, newProgress.toString());
    
    if (newProgress % 5 === 0 || newProgress === 100) {
      updateWatchedHistory(movie, newProgress);
    }
  }, 10000);
}

function updateWatchedHistory(movie, progress) {
  const totalMinutes = parseInt(movie.Runtime?.replace(' min', '')) || 120;
  const minutesLeft = Math.max(0, totalMinutes - Math.floor(totalMinutes * (progress/100)));
  
  const existingIndex = state.watchedItems.findIndex(item => item.id === movie.imdbID);
  const newItem = {
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster !== "N/A" ? movie.Poster : "/placeholder-movie.jpg",
    year: movie.Year,
    type: movie.Type,
    minutesLeft,
    progress,
    lastWatched: new Date().toISOString()
  };
  
  if (existingIndex >= 0) {
    state.watchedItems[existingIndex] = newItem;
  } else {
    state.watchedItems.unshift(newItem);
  }
  
  localStorage.setItem('watchedItems', JSON.stringify(state.watchedItems));
}

function renderEmptyState(title, message, buttonText, buttonAction) {
  const template = document.getElementById('empty-template').content.cloneNode(true);
  contentEl.innerHTML = '';
  contentEl.appendChild(template);
  
  contentEl.querySelector('#empty-title').textContent = title;
  
  if (message) {
    contentEl.querySelector('#empty-message').textContent = message;
  } else {
    contentEl.querySelector('#empty-message').style.display = 'none';
  }
  
  if (buttonText && buttonAction) {
    const button = contentEl.querySelector('#empty-button');
    button.textContent = buttonText;
    button.addEventListener('click', buttonAction);
  } else {
    contentEl.querySelector('#empty-button').style.display = 'none';
  }
}

function renderMovieCards(container, movies) {
  movies.forEach(movie => {
    const template = document.getElementById('movie-card-template').content.cloneNode(true);
    const card = template.querySelector('.movie-card');
    
    card.querySelector('.movie-poster').src = movie.Poster !== "N/A" ? movie.Poster : '/placeholder-movie.jpg';
    card.querySelector('.movie-poster').alt = movie.Title;
    card.querySelector('.movie-title').textContent = movie.Title;
    card.querySelector('.movie-meta').textContent = `${movie.Year} • ${movie.Type}`;
    
    const star = card.querySelector('.favorite-star');
    if (state.favorites.includes(movie.imdbID)) {
      star.classList.add('active');
    }
    
    star.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(movie.imdbID);
      if (state.favorites.includes(movie.imdbID)) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });
    
    card.addEventListener('click', () => navigateTo(`/watch/${movie.imdbID}`));
    container.appendChild(card);
  });
}

// Movie functions
function toggleFavorite(movieId) {
  if (!state.isLoggedIn) {
    alert('Please login to add favorites');
    navigateTo('/sign');
    return;
  }
  
  if (state.favorites.includes(movieId)) {
    state.favorites = state.favorites.filter(id => id !== movieId);
  } else {
    state.favorites = [...state.favorites, movieId];
  }
  
  localStorage.setItem('favorites', JSON.stringify(state.favorites));
}

async function searchMovies(title) {
  if (!title.trim()) return;
  
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=b6003d8a&s=${title}`);
    const data = await response.json();
    
    if (data.Response === "True") {
      const moviesWithDetails = await Promise.all(
        data.Search.map(async (movie) => {
          try {
            const detailsResponse = await fetch(`https://www.omdbapi.com/?apikey=b6003d8a&i=${movie.imdbID}&plot=full`);
            const details = await detailsResponse.json();
            return { ...movie, ...details };
          } catch {
            return movie;
          }
        })
      );
      
      state.allMovies = moviesWithDetails;
      renderSearchResults(moviesWithDetails);
    } else {
      renderEmptyState(data.Error || "No movies found", "Go to Home Page", () => navigateTo('/'));
    }
  } catch (err) {
    renderEmptyState(err.message || "Error fetching movies", "Go to Home Page", () => navigateTo('/'));
  }
}

function renderSearchResults(movies) {
  const container = document.querySelector('.container') || document.createElement('div');
  container.innerHTML = '';
  
  if (movies.length === 0) {
    renderEmptyState("No movies found", "Go to Home Page", () => navigateTo('/'));
    return;
  }
  
  renderMovieCards(container, movies);
}

async function fetchMovieDetails(movieId) {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=b6003d8a&i=${movieId}&plot=full`);
    const data = await response.json();
    
    if (data.Response === "True") {
      state.currentMovie = {
        ...data,
        trailerId: data.imdbID || "dQw4w9WgXcQ"
      };
      renderMovieWatchPage(state.currentMovie);
    } else {
      renderEmptyState(data.Error || "Movie not found", "Back to Home", () => navigateTo('/'));
    }
  } catch (err) {
    renderEmptyState(err.message || "Error fetching movie", "Back to Home", () => navigateTo('/'));
  }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);
window.toggleTheme = toggleTheme;
