import {
  RouterProvider,
  } from "react-router-dom";
  import { router } from './Route/Routes';

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
