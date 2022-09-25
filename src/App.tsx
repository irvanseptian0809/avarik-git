// Core
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// Component Layout
import Main from "Components/Layouts/Main"

// Pages
import SearchUser from "Pages/SearchUser"
import DetailUser from "Pages/DetailUser"

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Main><SearchUser /></Main>),
  },
  {
    path: "/detail-user/:login",
    element: (<Main><DetailUser /></Main>),
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
