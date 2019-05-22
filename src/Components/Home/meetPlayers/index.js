import React, { Component } from 'react';
import Stripes from '../../../Resources/images/stripes.png';
import { Tag } from '../../ui/misc';
import Fade from 'react-reveal/Fade';
import HomeCards from './cards';

class MeetPlayers extends Component {

    state = {
        show: false
    }

    render() {
        return (
            <Fade
                fraction={0.4}
                onReveal={
                    () => {
                        this.setState({
                            show: true
                        })
                    }
                }
            >
                <div
                    className="home_meetplayers"
                    style={{ background: `#ffffff url(${Stripes})` }}
                >
                    <div className="container">
                        <div className="home_meetplayers_wrapper">
                            <div className="home_card_wrapper">
                                <HomeCards
                                    show={this.state.show}
                                />
                        </div>
                            <div className="home_text_wrapper">
                                <Tag
                                    bck="#0e1732"
                                    size="100px"
                                    color="#ffffff"
                                    add={{
                                        display: 'inline-block',
                                        marginBottom: '20px',
                                    }}
                                >
                                    meet
                            </Tag>
                                <Tag
                                    bck="#0e1732"
                                    size="100px"
                                    color="#ffffff"
                                    add={{
                                        display: 'inline-block',
                                        marginBottom: '20px',
                                    }}
                                >
                                    the
                            </Tag>
                                <Tag
                                    bck="#0e1732"
                                    size="100px"
                                    color="#ffffff"
                                    add={{
                                        display: 'inline-block',
                                        marginBottom: '20px',
                                    }}
                                >
                                    players
                            </Tag>
                                <Tag
                                    bck="#ffff"
                                    size="27px"
                                    color="#0e1731"
                                    link={true}
                                    linkto="/the_team"
                                    add={{
                                        display: 'inline-block',
                                        marginBottom: '27px',
                                        border: '1px solid #0e1731'
                                    }}
                                >Meet them here</Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default MeetPlayers;