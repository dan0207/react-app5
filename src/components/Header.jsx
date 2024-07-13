
import { useContext } from 'react';
import Logo from '../assets/logo.png'
import LogoDark from '../assets/logo-dark.png'
import ThemeSwitch from './ThemeSwitch';
import ContextComponent from '../context/ContextComponent';


function Header() {

    const { darkMode } = useContext(ContextComponent)

    const pages = [
        { page: 'Home', url: '#home' },
        { page: 'Books', url: '#books' },
        { page: 'Services', url: '#services' },
        { page: 'Acquisitions', url: '#acquisitions' },
        { page: 'Login', url: '#login' },
    ];

    const listPages = pages.map((product, index) =>
        <li key={index} className="nav-item">
            <a role="button" className={`px-3 py-1 btn rounded-pill ${product.page === 'Home' && 'btn-primary active'}`}>{product.page}</a>
        </li >
    );

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-0 sticky-top">
                <div className="container-fluid d-flex px-4">

                    <a className="navbar-brand" href="./index.html">
                        <img className='img-fluid img-responsive' src={darkMode ? LogoDark : Logo} alt="Cavite State University Tanza Campus Library" width="180" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <form className="d-flex me-4 mx-auto w-50" role="search">
                            <input className="form-control rounded-end-0" type="search" placeholder="Search library collection here.." aria-label="Search" />
                            <button className="btn btn-outline-primary rounded-start-0" type="submit">Search</button>
                        </form>

                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            {listPages}
                        </ul>

                        <ThemeSwitch />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header