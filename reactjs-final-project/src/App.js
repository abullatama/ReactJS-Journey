import './App.css';
import 'antd/dist/antd.css';
import Main from './Component/Layouts/Main'
import { MovieProvider } from './Component/Context/MovieContext'
import { GameProvider } from './Component/Context/GameContext'
import { UserProvider } from './Component/Context/UserContext'

function App() {
  return (
    <>
      <UserProvider>
        <GameProvider>
          <MovieProvider>
            <Main />
          </MovieProvider>
        </GameProvider>
      </UserProvider>
    </>
  );
}

export default App;
