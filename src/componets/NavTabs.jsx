import { Link, useLocaction } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocaction().pathname;

    return (
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <Link
                    to='/'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Contact Me
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;