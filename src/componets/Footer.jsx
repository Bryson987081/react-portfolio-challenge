function Footer() {
    return (
        <footer className="text-center py-4" style={{backgroundColor:'#8EACCD'}}>
            <div className="container">
                <h5 className="mb-3">My Socials</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0" style={{backgroundColor:'#8EACCD'}}>
                        <a href="https://github.com/Bryson987081" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none" >
                            GitHub
                        </a>
                    </li>
                    <li className="list-group-item border-0" style={{backgroundColor:'#8EACCD'}}>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                            LinkedIn
                        </a>
                    </li>
                    <li className="list-group-item border-0" style={{backgroundColor:'#8EACCD'}}>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;