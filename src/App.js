import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/mainPage";
import Organisation from "./components/organisation";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/organisation/:name/:id",
    element: <Organisation />,
  },
]);
const cache = createCache({
  key: "css",
  prepend: true,
});
function App() {
  return (
    <CacheProvider value={cache}>
      <RouterProvider router={router} />
    </CacheProvider>
  );
}

export default App;
