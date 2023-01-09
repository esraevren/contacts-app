import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts';
import List from './components/Contacts/List';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from './components/Contacts/Edit';

function App() {
  return (
    <div className="App">
     <div id='container'>
     <BrowserRouter>
      <Routes>
        <Route index element={<Contacts />} />
        <Route path="/edit/:id" element={<Edit />}  />
      </Routes>
    </BrowserRouter>


     
     </div>
     
    </div>
  );
}

export default App;
