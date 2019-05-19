import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class Stripes extends Component {

    showStrips = () => (
        <div>
            strips
        </div>
    )
 
    render() {
        return (
            <div className="featured_strips">
                {this.showStrips()}
            </div>
        );
    }
}

export default Stripes;