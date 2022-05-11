import { MoviesGrid } from './MoviesGrid';
import styles from '../estilos_componentes/App.module.css';

export function App() {
  return (
    <div className="App">
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}