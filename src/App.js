import {  useRoutes } from 'react-router-dom';
import './App.css';

import router from './Routes';

function App() {
  const routes=useRoutes(router)
 return routes
}

export default App;
