import './App.scss';
import {Routes , Route} from 'react-router-dom';

//  Components
import Header from './Components/Header/Header.component';

// Page
import HomePage from './Pages/home/home.component'
import NotFoundPage from './Pages/not-found/not-found.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="*" exact element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
