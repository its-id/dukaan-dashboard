import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Page404 } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
