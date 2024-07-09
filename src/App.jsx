// import React from "react";
// import { RouterProvider } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";
// import { routes } from "./router/index";
// import { Context } from "./context/Context"; // Import Context correctly

// const router = createBrowserRouter(routes);

// function App() {
//   return (
//     <Context>
//       <RouterProvider router={router} />
//     </Context>
//   );
// }

// export default App;

import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/index"; // Import the router correctly
import { Context } from "./context/Context"; // Import Context correctly

function App() {
  return (
    <Context>
      <RouterProvider router={router} />
    </Context>
  );
}

export default App;
