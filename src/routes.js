import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register'
import Login from './Login'
import App from './App'

function R() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="register" element={<Register />} />
            <Route path="/auth" element={<App />} />
        </Routes>
        </BrowserRouter>
    );
}

export default R;
