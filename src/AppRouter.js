import { Routes,Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
const AppRouter = ()=>{
    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    )
}
export default AppRouter;