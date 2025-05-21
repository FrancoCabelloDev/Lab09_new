// App.jsx - Main application component
import Header from './components/Header';
import Hero from './components/Hero';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import { getMovies } from './data/movies';
import './css/index.css';

const App = () => {
  // Get movies from our data file
  const movies = getMovies();

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <MovieList movies={movies} />
      </main>
      <Footer />
    </>
  );
};

export default App;

