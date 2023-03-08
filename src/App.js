import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom/dist";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const routeChildren = [
  <Route path="/" element={<HomePage />} />,
  <Route path="/products" element={<ProductsPage />} />,
];

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<RootLayout />} children={routeChildren} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

// const router = createBrowserRouter(
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/products",
//     element: <ProductsPage />,
//   }
// );

function App() {
  return <RouterProvider router={router} />;
}

export default App;
