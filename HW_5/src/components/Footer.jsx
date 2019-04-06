import React from 'react';

// const log = console.log;

const Footer = ({ children }) => {

    return (
      <footer className="footer-wrapper" style={{color:'white', textAlign:'center'}}>
        {children}
      </footer>
    );
}

export default Footer;
