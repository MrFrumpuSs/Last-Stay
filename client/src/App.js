import logo from './logo.svg';
import Navbar from './components/UI/Navbar/Navbar';
import { BrowserRouter } from "react-router-dom";
import './styles/App.scss';
import AppRouter from './components/AppRouter';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <AppRouter></AppRouter>
        </BrowserRouter>
    );
}

export default App;
