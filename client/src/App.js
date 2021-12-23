import React, { useEffect, lazy, Suspense } from "react";
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
import Spinner from "./Components/spinner/spinner.component";

// Page
const HomePage = lazy(() => import("./Pages/home/home.component"));
const NotFoundPage = lazy(() =>
  import("./Pages/not-found/not-found.component")
);
const ShopPage = lazy(() => import("./Pages/shop/shop.component"));
const CheckoutPage = lazy(() => import("./Pages/checkout/checkout.component"));
const SucessPaymentPage = lazy(() =>
  import("./Pages/success_payment/success-payment.component")
);
const SignInAndSignUpPage = lazy(() =>
  import("./Pages/signin-signup/signin-signup.component")
);

const AboutPage = lazy(()=> import('./Pages/about/about.component'))


// import { addCollectionAndItems } from "./firebase/firebase.util";
// import { selectPlantsForPreview } from "./redux/shop/shop.selectors";

function App({ checkUserSession, currentUser /*, collectionsArray */ }) {
  useEffect(() => {
    checkUserSession();
    // addCollectionAndItems('collections' , collectionsArray)
  }, [checkUserSession /*, collectionsArray*/]);

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<AboutPage />} />
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
      </Suspense>

      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray : selectPlantsForPreview
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
