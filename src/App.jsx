import { Outlet } from 'react-router-dom';
import Nav from './componets/NavTabs';
import Header from './componets/Header';
import Footer from './componets/Footer';

function App() {
    return (
        <>
        <Header />
        <Nav />
        <main className='container-fluid flex-grow-1 d-flex pt-5'>
            <Outlet />
        </main>
        <Footer />
        </>
    );
}

export default App;