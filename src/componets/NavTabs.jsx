import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <Link
                    to='/'
                    className={`nav-link ${currentPage === '/' ? 'active' : ''} text-dark`}
                >
                    About Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Portfolio'
                    className={`nav-link ${currentPage === '/Portfolio' ? 'active' : ''} text-dark`}
                >
                    My Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Resume'
                    className={`nav-link ${currentPage === '/Resume' ? 'active' : ''} text-dark`}
                >
                    My Resume
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Contact'
                    className={`nav-link ${currentPage === '/Contact' ? 'active' : ''} text-dark`}
                >
                    Contact Me
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;