import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "./store/store";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen">
        <main>
          <ToastContainer />
          <Outlet />
        </main>
      </div>
    </Provider>
  );
}

export default App;
