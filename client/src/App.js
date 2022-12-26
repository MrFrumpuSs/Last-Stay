import logo from './logo.svg';
import Navbar from './components/UI/Navbar/Navbar';
import { BrowserRouter } from "react-router-dom";
import './styles/App.scss';
import AppRouter from './components/AppRouter';

function App() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <AppRouter></AppRouter>
        </BrowserRouter>
    );
}

export default App;
