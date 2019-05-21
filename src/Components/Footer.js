import React from 'react';
import TeamLogo from './ui/icons';

const Footer = (props) =>  {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <TeamLogo 
                    link={true}
                    linkTo="/"
                    height="70px"
                    width="70px"
                />
            </div>
            <div className="footer_description">
                Manchester city 2019. All rights reserved
            </div>
        </footer>
    )
}

export default Footer;
