import Head from "./component/Head";
import Body from "./component/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import WatchContainer from "./component/WatchContainer"


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[{
      path:"/",
      element:<MainContainer/>},
    {
      path:"/watch",
      element:<WatchContainer/>,
    }]
  }
]);
function App() {
  return (
    <Provider store={store}>
    <div className="w-[100vw]   ">
     
      <Head/>
      <RouterProvider router={appRouter}/>

    </div>
    </Provider>
  );
}

export default App;
