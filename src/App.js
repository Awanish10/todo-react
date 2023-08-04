import './App.css';
import './Todo.css';
import Todo from './Todo';
import Add from './componets/Add';
import Update from './componets/Update';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Delete from './componets/Delete';

function App() {
  return (
   <>
  <Routes>
  <Route path='/'  element={<Todo/>}/>
  <Route path='/add'  element={<Add/>}/>
  <Route path='/update/:id?'  element={<Update/>}/>
  <Route path='/delete/'  element={<Delete/>}/>
  </Routes>
   </>
  );
}

export default App;
