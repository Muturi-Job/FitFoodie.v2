import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Users';
import Exercises from './components/Exercises';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/users' element={<Users />}></Route>
      <Route path='/exercises' element={<Exercises />}></Route>
    </Routes>
</>
  );
}

export default App;
