import React, { Component } from 'react';
import { firebaseMatches } from './../../../firebase';
import { firebaseLooper } from './../../../ui/misc';
import MatchesBlock from './../../../ui/macthes_block';
import Slide from 'react-reveal/Slide';

class Blocks extends Component {

    state = {
        matches: []
    }

    componentDidMount() {
        firebaseMatches.limitToLast(6).once('value').then((snapshot) => {
            const matches = firebaseLooper(snapshot);

            this.setState({
                matches: matches.reverse()
            })
        })
    }

    showMatches = (matches) => (
        matches ?
            matches.map((match) => (
                <Slide bottom key={match.id}>
                    <div key={match.id} className="item">
                        <div className="wrapper">
                            <MatchesBlock match={match} />
                        </div>
                    </div>
                </Slide>
            ))
            : null
    )

    render() {
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Blocks;