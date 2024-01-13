
import './App.css';
import './index.css'
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Mainlayouts from './layout/mainlayout';
import Home from './components/home';
import About from './components/about';
import Service from './components/service';
import Contact from './components/contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Mainlayouts/>}>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='service' element={<Service/>}/>
    <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
