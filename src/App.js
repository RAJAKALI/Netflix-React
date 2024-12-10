import { RouterProvider, createBrowserRouter } from "react-router-dom";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Login from "./components/Login";
import Browser from "./components/Browser";
import MainAppLayout from "./pages/MainAppLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainAppLayout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browser",
          element: <Browser />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
    <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
