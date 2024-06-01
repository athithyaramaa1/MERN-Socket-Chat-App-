import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Chats from './Pages/Chats';
 
function App() {
  return (
    <div className='container'>
     <Route exact path="/" component={Homepage}/>
     <Route path="/chats" component={Chats}/>
    </div>
  );
}

export default App;
