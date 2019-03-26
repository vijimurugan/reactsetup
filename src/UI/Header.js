import React, {Component} from 'react';
import { Link } from "react-router-dom";



const header = () => {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link className={'nav-link'} to="/">Home</Link>
          </li>
          <li class="nav-item">
          <Link className={'nav-link'} to="/table">Tables</Link>
           
          </li>
          <li class="nav-item">
          <Link className={'nav-link'} to="/form">Forms</Link>
           
          </li>
          <li class="nav-item">
          <Link className={'nav-link'} to="/login">Login</Link>
            
          </li>
        </ul>
      </nav>
    )
}

export default header;