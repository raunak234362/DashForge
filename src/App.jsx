import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen">
        <main>
          <Outlet />
        </main>
      </div>
    </Provider>
  );
}

export default App;
