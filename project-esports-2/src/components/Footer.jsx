import React from 'react';
import { Link } from 'react-router-dom';

export function Footer () {

  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-2">
            <Link className='h5 text-white btn btn-danger ' to={"/about"}>About Us <span className="bi-chevron-right"></span> </Link>
            <p> Agent Esports, a groundbreaking platform for FreeFire players, where gamers bid farewell to frustration.</p>
          </div>
          <div className="col-md-4 mt-2">
            <Link className='h5 text-white btn btn-danger ' to={"/contact"}>Contact Us <span className="bi-chevron-right"></span> </Link>
            <ul className="list-unstyled">
              <li><i className="bi bi-envelope-fill"> </i>teluguagentgaming@gmail.com</li>
              <li><i className="bi bi-phone"></i> 6302490634</li>
            </ul>
          </div>
          <div className="col-md-4 mt-2">
            <Link className='h5 text-white btn btn-danger ' to={"/userguide"}>Guide <span className="bi-chevron-right"></span> </Link>
            <h5>Follow Us</h5>
            <div>
              <a target='_blank' href="https://www.youtube.com/@teluguagentgaming" className="text-light me-3"><i className="bi bi-youtube text-danger"></i></a>
              <a target='_blank' href="" className="text-light me-3"><i className="bi bi-facebook text-primary"></i></a>
              <a target='_blank' href="https://www.instagram.com/agentesports.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-light me-3"><i className="bi bi-instagram text-danger"></i></a>
            </div>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="row">
          <div className="col text-center">
            <p>&copy; 2024 Your Website. Made with <i className="bi bi-heart-fill text-danger"></i> by AE</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

