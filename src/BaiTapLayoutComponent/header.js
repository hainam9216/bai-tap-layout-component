import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
            <div className='container'>
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}