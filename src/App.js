import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Route';
import { useAuthCheck } from './Hooks/useAuthCheck';

function App() {
  const authChecking = useAuthCheck()
  return (
    <div className="App">
      {
        !authChecking &&<div>Loading</div>
      }
     {authChecking && <RouterProvider router={router} />}
    </div>
  );
}

export default App;
