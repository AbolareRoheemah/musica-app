import './App.css';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Playlists from './pages/Playlists';
import Profile from './pages/Profile';
import Radio from './pages/Radio';
import Video from './pages/Video';
import Logout from './pages/Logout';
import Album from './pages/Album';
import Header from './components/Header'
import Sidebar from './components/Sidebar/Index'
import Footer from './components/Footer/Index'
import { useState } from 'react';

function App() {
  const [hold, setHold] = useState('');
  const [img, setImg] = useState('');
  const receiveFunc = (data) => {
    setHold(data)
    setImg(data.image)
  }
  return (
    <div className='app-ctn'>
      <Header />
      <div className="main-ctn">
        <div className='sidebar-ctn'>
          <Sidebar />
        </div>
        <div className='app-body'>
          <Routes>
            <Route exact={true} path='/' element={ <Dashboard receiveFunc={receiveFunc} /> } />
            <Route path='/playlists' element={ <Playlists /> } />
            <Route path='/profile' element={ <Profile /> } />
            <Route path='/radio' element={ <Radio /> } />
            <Route path='/video' element={ <Video /> } />
            <Route path='/logout' element={ <Logout /> } />
            <Route path='/album' element={ <Album /> } />
          </Routes>
        </div>
      </div>
      <div className="footer"><Footer newImage={img}/></div>
    </div>
  );
}

export default App;
