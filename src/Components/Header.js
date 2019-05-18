import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import TeamLogo from './../ui/icons';

const Header = (props) =>  {
    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor: '#6bb9f0',
                boxShadow: 'none',
                padding: '10px 0',
                borderBottom: '2px solid #1f3a93'
            }}
        >
            <Toolbar
               style={{ display: 'flex' }} 
            >
                <div style={{ flexGrow: 1 }} >
                    <div className="header_logo">
                        <TeamLogo 
                            link={true}
                            linkTo="/"
                            height="70px"
                            width="70px"
                        />
                    </div>
                </div>

                <Link to="/the_team">
                    <Button color="inherit">
                        Team
                    </Button>
                </Link>

                <Link to="/the_matches">
                <Button color="inherit">
                        Spiele
                    </Button>
                </Link>

            </Toolbar>
        </AppBar>
    )
}

export default Header;
