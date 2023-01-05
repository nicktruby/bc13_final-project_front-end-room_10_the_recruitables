import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './pages/LoginPage';
import Profile from './pages/Profile';
import Game from './pages/Game';
import Progress from './pages/Progress'; 

export default function App() {
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate('/profile');
  };

  const navigateLogin = () => {
    navigate('/');
  };

  const navigateToProgress = () => {
    navigate('/progress');
  };

  const navigateToGame = () => {
    navigate('/game');
  };

  return (
    <div>
      <div>

        <button onClick={navigateLogin}>Login</button>
        <button onClick={navigateToProfile}>profile</button>
        <button onClick={navigateToProgress}>progress</button>
        <button onClick={navigateToGame}>game</button>

        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Login />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </div>
  );
}
