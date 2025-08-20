import { Outlet } from 'react-router';
import Header from '../Components/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;