import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeView from '../views/HomeView';

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeView/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Router