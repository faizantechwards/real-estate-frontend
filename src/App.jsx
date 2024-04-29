import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { Layout, PublicAuth, RequireAuth } from "./routes/Layout/Layout";
import HomePage from "./routes/HomePage/HomePage";
import ListPage from "./routes/ListPage/ListPage";
import SinglePage from "./routes/SinglePage/SinglePage";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicAuth />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<PublicAuth />}>
  //         <Route path="/" element={<HomePage />} />
  //         <Route path="/list" element={<ListPage />} />
  //         <Route path="/:id" element={<SinglePage />} />
  //         <Route path="/register" element={<Register />} />
  //         <Route path="/login" element={<Login />} />
  //       </Route>
  //       <Route path="/" element={<RequireAuth />}>
  //         <Route
  //           path="/profile"
  //           element={<ProfilePage />}
  //           loader={profilePageLoader}
  //         />
  //         <Route path="/profile/update" element={<ProfileUpdatePage />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
