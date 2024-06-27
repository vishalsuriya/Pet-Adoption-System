import { Route, Routes } from 'react-router-dom';
import Home  from './Components/Home';
import PetAddForm from "./Components/NewPet/PetAddForm";
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element ={<Home />}/>
    <Route path="/PetAddForm" element ={<PetAddForm />}/>
    </Routes>
    </>
  );
}

export default App;
