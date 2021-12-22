import React, { useEffect } from "react";
import "./App.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Routes, Route, Navigate } from "react-router-dom";

//Redux
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

//  Components
import Header from "./Components/Header/Header.component";
import Footer from "./Components/footer/footer.component";

// Page
import HomePage from "./Pages/home/home.component";
import NotFoundPage from "./Pages/not-found/not-found.component";
import ShopPage from "./Pages/shop/shop.component";
import CheckoutPage from "./Pages/checkout/checkout.component";
import SucessPaymentPage from "./Pages/success_payment/success-payment.component";
import SignInAndSignUpPage from "./Pages/signin-signup/signin-signup.component";

function App({ checkUserSession, currentUser }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="*" exact element={<NotFoundPage />} />
        <Route path="/checkout" exact element={<CheckoutPage />} />
        <Route path="/success" exact element={<SucessPaymentPage />} />
        <Route
          path="/signin"
          exact
          element={
            currentUser ? <Navigate to={"/"} /> : <SignInAndSignUpPage />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
