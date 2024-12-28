import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen">
        <header className="p-4 bg-gray-100 shadow-md flex justify-between items-center">
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </Provider>
  );
}

export default App;
