import './App.css';
import Navbar from './components/navbar';
import HomePageGrid from './components/homePageGrid';
import { BrowserRouter,  Router, Route, Routes } from 'react-router-dom';
import News from './components/news';
import BusinessSub from './components/BusinessSub';
import Social from './components/Social';
import MainPage from './components/mainPage';
import Navimage from './components/navimage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Navimage/>
      <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/business" element={<BusinessSub/>} />
      <Route path="/social" element={<Social/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;