import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoutes from './Components/authRoutes/privateRoutes'

import Home from './Components/Home';
import SignIn from './Components/Signin';
import Dashboard from './Components/Admin/Dashboard';

const Routes = (props) => {
  return (
   <Layout>
     <Switch>

        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard}/>

        {/* <Route exact component={Dashboard} path="/dashboard" /> */}
        <Route exact component={SignIn} path="/sign_in" />
        <Route exact component={Home} path="/" />
     </Switch>
   </Layout>
  )
}

export default Routes;
