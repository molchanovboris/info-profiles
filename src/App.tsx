import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  Repositories,
  UserInfo,
  RepositoryInfo
} from './pages';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<UserInfo />} />
        <Route path="/star/:username" element={<Repositories />} />
        <Route path="/repository/:login/:name" element={<RepositoryInfo />} />
      </Routes>
    </Router>
  )
}

export default App;
