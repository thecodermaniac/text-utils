import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(params) {
    return (
        <>
            <nav className={params.modes==='light'?'navbar navbar-expand-lg bg-light':'navbar navbar-dark bg-dark'} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{params.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={params.modefunc}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode </label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set Title'
}