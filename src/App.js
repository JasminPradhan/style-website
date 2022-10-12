import {Routes,Route} from 'react-router-dom'

import Home from "./routes/home/home.components";
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';
import Navbar from './routes/navigationbar/nav.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
