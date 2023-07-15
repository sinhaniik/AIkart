import './App.css'
import './tailwind.css';
import Navbar from "./components/navbar/navbar.tsx";
import MainBody from "./components/mainBody/mainBody.tsx";

function App() {
   return (
    <div>
      <Navbar/>
        <MainBody/>
    </div>
  );
}

export default App
