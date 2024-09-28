import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieTimes from "./components/MovieTimes";
import MovieLayout from "./layout/MovieLayout";
import TicketQR from "./components/TicketQR";

import { MovieProvider } from "./utils/MovieContext";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MovieLayout />}>
              <Route index element={<MovieList />} />
              <Route path="movie" element={<MovieList />} />
              <Route path="movieTimes/:name" element={<MovieTimes />} />
              <Route path="ticket" element={<TicketQR />} />
            </Route>
          </Routes>
        </Router>
      </MovieProvider>
    </div>
  );
}

export default App;
