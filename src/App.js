import { Routes, Route } from 'react-router-dom'; //Rote v6.4.3

import AllEventsPage from './pages/AllEvents';
import FavoritesPage from './pages/Favorites';
import NewEventPage from './pages/NewEvent';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllEventsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/new-event" element={<NewEventPage />} />
      </Routes>
    </Layout>
  );
}

export default App;