import movies from '../db_prueba/movies.json';
import { MovieCard } from './MovieCard';
import styles from '../estilos_componentes/MoviesGrid.module.css'

export function MoviesGrid() {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </ul>
  );
}