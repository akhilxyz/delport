"use client";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { persistStore } from "redux-persist";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.scss";
import { PersistGate } from "redux-persist/integration/react";
import AppProvider from "../components/context/AppContext";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </AppProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
