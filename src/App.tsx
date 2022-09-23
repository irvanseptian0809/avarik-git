import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import SearchUser from "Pages/SearchUser"
import DetailUser from "Pages/DetailUser"

const router = createBrowserRouter([
  {
    path: "/",
    element: (<SearchUser />),
  },
  {
    path: "/detail-user",
    element: (<DetailUser />),
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
