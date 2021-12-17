import './App.scss';
import {Routes , Route} from 'react-router-dom';

//  Components
import Header from './Components/Header/Header.component';
import Footer from './Components/footer/footer.component';


// Page
import HomePage from './Pages/home/home.component'
import NotFoundPage from './Pages/not-found/not-found.component';
import ShopPage from './Pages/shop/shop.component';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/shop/*" element={<ShopPage/>}/>
        <Route path="*" exact element={<NotFoundPage/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
