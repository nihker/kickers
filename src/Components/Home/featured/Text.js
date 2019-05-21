import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import FeaturePlayer from '../../../Resources/images/featured_player.png'

class Text extends Component {

    playerName = 'featured_player';

    animateNumber = () => (
        <Animate
            show={true}

            start={{
                opacity:0,
                rotate:0
            }}

            enter={{
                opacity:1,
                rotate:360,
                timing: {duration: 1000, ease: easePolyOut}
            }}
        >
            {({opacity, rotate}) => {
                return(
                    <div 
                        className="featured_number"
                        style={{
                            opacity,
                            transform: `translate(260px,170px) rotateY(${rotate}deg)`
                        }}>
                        2
                    </div>
                )
            }}
        </Animate>
    )

    animateFirst = () => (
        <Animate
            show={true}

            start={{
                opacity:0,
                x:503,
                y:430

            }}

            enter={{
                opacity:1,
                x:[273],
                y:[430],
                timing: {duration: 500, ease: easePolyOut}
            }}
        >
            {({opacity,x,y}) => {
                return(
                    <div 
                        className="featured_first"
                        style={{
                            opacity,
                            transform: `translate(${x}px,${y}px)`
                        }}>
                        League
                    </div>
                )
            }}
        </Animate>
    )

    animateSecond = () => (
        <Animate
            show={true}

            start={{
                opacity:0,
                x:503,
                y:560

            }}

            enter={{
                opacity:1,
                x:[273],
                y:[560],
                timing: {duration: 500, ease: easePolyOut}
            }}
        >
            {({opacity,x,y}) => {
                return(
                    <div 
                        className="featured_second"
                        style={{
                            opacity,
                            transform: `translate(${x}px,${y}px)`
                        }}>
                        Championships
                    </div>
                )
            }}
        </Animate>
    )

    animatePlayer = () => (
        <Animate
            show={true}

            start={{
                opacity:0,
            }}

            enter={{
                opacity:[1],
                timing: {delay: 800,duration: 500, ease: easePolyOut}
            }}
        >
            {({opacity}) => {
                return(
                    <div 
                        className="featured_player"
                        style={{
                            opacity,
                            background: `url(${FeaturePlayer}) no-repeat`,
                            transform: `translate(500px,201px)`
                        }}>
                        
                    </div>
                )
            }}
        </Animate>
    )

    render() {
        return (
            <div className="featured_text">
                {this.animatePlayer()}
                {this.animateNumber()}
                {this.animateFirst()}
                {this.animateSecond()}
            </div>
        );
    }
}

export default Text;