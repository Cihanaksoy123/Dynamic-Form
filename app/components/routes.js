import React from 'react';
import {Router, Scene, Drawer} from 'react-native-router-flux';
import CustomForm from './customform.js';
import Login from '../views/login';
import Home from '../views/home';
import Form from '../views/form';
import SideMenu from './SideMenu';
import {Icon} from 'native-base';
import colors from '../assets/color';
const Routes = () => {
  return (
    <Router
      navigationBarStyle={{backgroundColor: colors.blueGrey9}}
      navBarButtonColor={colors.white}>
      <Scene na key="root">
        <Drawer
          hideNavBar
          key="drawerMenu"
          contentComponent={SideMenu}
          drawerWidth={250}
          drawerPosition="left"
          drawerIcon={
            <Icon
              type="FontAwesome"
              name="bars"
              style={{color: colors.white,fontSize:20}}
            />
          }
          titleStyle={{color: colors.white}}>
          <Scene
            key="Login"
            hideNavBar={true}
            hideTabBar={true}
            component={Login}
            title="Scarlet"
            initial
          />
          <Scene key="Home" component={Home} title="Home" />
        </Drawer>
        <Scene
          key="Form"
          backButtonTintColor={colors.white}
          titleStyle={{color: colors.white}}
          component={Form}
          title="Form"
        />
      </Scene>
    </Router>
  );
};

export default Routes;
