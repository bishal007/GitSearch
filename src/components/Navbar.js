import React , {Component} from 'react';

class Navbar extends  Component{
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-danger">
                    <div className="container">
                        <a className="navbar-brand" href="/">Github Search</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export  default Navbar;