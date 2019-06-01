import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebasePlayers } from '../../../firebase';
import { firebaseLooper } from '../../ui/misc';


class AdminPlayers extends Component {

    state = {
        isLoading: true,
        players: []
    }

    componentDidMount() {
        firebasePlayers.once('value').then((snapshot) => {
            const players = firebaseLooper(snapshot);

            this.setState({
                isLoading: false,
                players: players.reverse()
            })
        })


    }

    render() {
        return (
            <AdminLayout>
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Number</TableCell>
                                    <TableCell>Firstname</TableCell>
                                    <TableCell>Lastname</TableCell>
                                    <TableCell>Position</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.players ?
                                        this.state.players.map((palyer, i) => (
                                            <TableRow key={i}>
                                                <TableCell>
                                                    <strong>
                                                        <Link to={`/admin_players/edit_player/${palyer.id}`}>
                                                            {palyer.number}
                                                        </Link>
                                                    </strong>
                                                </TableCell>
                                                <TableCell>{palyer.name}</TableCell>
                                                <TableCell>{palyer.lastname}</TableCell>
                                                <TableCell>{palyer.position}</TableCell>
                                            </TableRow>
                                        ))
                                        : null
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                    <div className="admin_progress">
                        {
                            this.state.isLoading ?
                                <CircularProgress thickness={7} style={{ color: '#98c5e9' }} />
                                : ''
                        }
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default AdminPlayers;