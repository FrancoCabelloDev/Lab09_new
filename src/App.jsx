import { useState } from "react";
import Header from "./components/layouts/Header";
import Hero from "./components/modules/Hero";
import MovieList from "./components/modules/MovieList";
import MovieSearch from "./components/widgets/MovieSearch";
import Footer from "./components/layouts/Footer";
import { getMovies } from "./data/movies";



import './css/index.css';



function App() {
  const movies = getMovies();
  const [favorites, setFavorites] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFavorite = (movieId) => {
    setFavorites((prev) => ({
      ...prev,
      [movieId]: !prev[movieId],
    }));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery)
  );

  const favoriteMovies = movies.filter((movie) => favorites[movie.id]);

  return (
    <>
      <Header />
      <main className="main d-flex f-direction-column g-8">
        <Hero />
        <MovieSearch onSearch={handleSearch} />
        <MovieList
          movies={filteredMovies}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
        {favoriteMovies.length > 0 && (
          <>
            <h2 className="title c-primary t-align-center m-top-8">Your Favorites ❤️</h2>
            <MovieList
              movies={favoriteMovies}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;