import './App.scss';
import {Routes , Route} from 'react-router-dom';

//  Components
import Header from './Components/Header/Header.component';
import Footer from './Components/footer/footer.component';


// Page
import HomePage from './Pages/home/home.component'
import NotFoundPage from './Pages/not-found/not-found.component';
import ShopPage from './Pages/shop/shop.component';
import CheckoutPage from './Pages/checkout/checkout.component'


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/shop/*" element={<ShopPage/>}/>
        <Route path="*" exact element={<NotFoundPage/>}/>
        <Route path="/checkout" exact element={<CheckoutPage/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
