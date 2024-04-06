import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import Navigation from "./components/Navigation/Navigation";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
