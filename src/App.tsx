
import Homepage from './pages/homepage';
import Login from './pages/login';
import SignUp from './pages/signup';
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Homepage />
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])
// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }

// export default App;

