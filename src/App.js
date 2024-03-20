import './App.css';
import NavbarTel from './Components/NavbarTel.tsx';
import NavbarDsk from './Components/NavbarDsk.tsx';
import ScrollNavbar from './Components/ScrollNavbar.tsx';
import ProfileInfo from './Components/ProfileInfo.tsx';
import Experiences from './Components/Experiences.tsx';
import Skills from './Components/Skills.tsx';
import Education from './Components/Education.tsx';
import Projects from './Components/Projects.tsx';
import Volunteering from './Components/Volunteering.tsx';
import Hobbies from './Components/Hobbies.tsx';
import Languiges from './Components/Languiges.tsx';
function App() {
  return (
    <div className="App">
      <NavbarTel/>
      <NavbarDsk/>
      <ScrollNavbar/>
      
      <div className='flex flex-col gap-12 p-4'>
      <ProfileInfo/>
      <Experiences/>
      <Skills/>
      <Education/>
      <Projects/>
      <Volunteering/>
      <Hobbies/>
      <Languiges/>
      </div>

    </div>
  );
}

export default App;
