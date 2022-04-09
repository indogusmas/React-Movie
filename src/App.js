import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage';
import MoviePage from './page/MoviePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="movie/:movieId" element={<MoviePage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
