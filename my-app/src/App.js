import css from './App.module.css';
import SideBar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      <NavBarSimple />
      <StatefulGreeting /> 
      <SideBar />
      
    </div>
  );
}

export default App;