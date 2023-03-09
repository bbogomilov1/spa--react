import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom/dist";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

const routeChildren = [
  <Route index="true" element={<HomePage />} />,
  <Route path="products" element={<ProductsPage />} />,
  <Route path="products/:productId" element={<ProductDetailPage />} />,
];

const routeDefinitions = createRoutesFromElements(
  <Route errorElement={<ErrorPage />}>
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
