import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import FavoriteList from "./components/FavoriteList";

function App() {
  const queryclient = new QueryClient();
  return (
    <QueryClientProvider client={queryclient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorite-List" element={<FavoriteList />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
