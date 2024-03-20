import logo from './logo.svg';
import './App.css';
import NavbarTel from './Components/NavbarTel.tsx';
import NavbarDsk from './Components/NavbarDsk.tsx';
import ScrollNavbar from './Components/ScrollNavbar.tsx';
import ProfileInfo from './Components/ProfileInfo.tsx';
import Experiences from './Experiences.tsx';
function App() {
  return (
    <div className="App">
      <NavbarTel/>
      <NavbarDsk/>
      <ScrollNavbar/>
      <ProfileInfo/>
      <Experiences/>
    </div>
  );
}

export default App;
