
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home';
import Jewelery from './Jewelery';
import Electronics from './Electronics';
import Men from './Men';
import Woman from './Woman';
import Item from './Item';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/jewelery' element={<Jewelery></Jewelery>}></Route>
        <Route path='/electronics' element={<Electronics></Electronics>}></Route>
        <Route path='/men' element={<Men></Men>}></Route>
        <Route path='/woman' element={<Woman></Woman>}></Route>
        <Route path='/item' element={<Item></Item>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
