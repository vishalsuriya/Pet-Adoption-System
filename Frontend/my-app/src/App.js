import { Route, Routes } from 'react-router-dom';
import Home  from './Components/Home';
import PetAddForm from "./Components/NewPet/PetAddForm";
import DogDetails from './Components/Dogpage/DogDetails';
import CatDetails from './Components/Catpage/CatDetails';
import AdoptForm from './Components/AdoptPet/AdoptForm';
import AdoptModal from './Components/Modal/DogModal';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/PetAddForm" element ={<PetAddForm />}/>
      <Route path="/dogs" element={<DogDetails/>}></Route>      
      <Route path="/cats" element={<CatDetails/>}></Route>
      <Route path='/adopt' element={<AdoptForm/>}></Route>
    </Routes>
    {/* <AdoptModal/> */}
    </>
  );
}

export default App;
