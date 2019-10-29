import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {Container, Content, Thumbnail, Text, Icon} from 'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../assets/color';
const routes = [
  {index: 0, text: 'Home', icon: 'home', link: 'Home'},
  {index: 1, text: 'About Me', icon: 'md-person', link: 'about'},
  {index: 2, text: 'My Favorites', icon: 'star', link: 'myfavorites'},
  {index: 3, text: 'Categories', icon: 'globe', link: 'categories'},
  {index: 4, text: 'Sign Out', icon: 'md-exit', link: 'Login'},
];
class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.route = this.route.bind(this);
    this.state = {
      currentSelected: 0,
    };
  }
  componentDidMount(){
    this.setState({
      currentSelected:0
    })
  }
  route(data) {
    if (data.link != 'login') {
      this.setState({
        currentSelected: data.index,
      });
    } else {
      this.setState({
        currentSelected: 0,
      });
    }
    this.props.navigation.navigate(data.link);
  }
  render() {
    const uri =
      'https://d33wubrfki0l68.cloudfront.net/ddd63ee47b7780cf57145a7ec898f05a07d909c6/b1911/images/icons/dictionaries-app-icon.png';
    return (
      <Container style={styles.container}>
        <Grid style={{backgroundColor: colors.white}}>
          <Row
            size={20}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 0.8, flexDirection: 'row'}}>
              <Thumbnail
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYm-KcyvHy3PDkmh0V9KzkUk26255h0RwthshiaoanTnfH2B_IRg',
                }}
              />
              <Text
                style={{
                  marginLeft: 15,
                }}>
                  {this.props.user}
                {/* {this.props.user != undefined
                  ? this.props.user.firstName + ' ' + this.props.user.lastName
                  : ''} */}
              </Text>
            </View>
          </Row>
          <Row size={80}>
            <View style={[{flex: 1, marginTop: 30}]}>
              {routes.map(data => (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => this.route(data)}>
                  <View
                    style={[
                      styles.listItemContainer,
                      this.state.currentSelected == data.index
                        ? styles.active
                        : styles.passive,
                    ]}>
                    <View
                      style={[
                        {
                          flex: 1,
                          height: '100%',
                          width: '100%',
                        },
                        this.state.currentSelected == data.index
                          ? {backgroundColor: 'aqua'}
                          : {},
                      ]}></View>
                    <View
                      style={[
                        styles.link,
                        {
                          flex: 6,
                          alignItems: 'center',
                        },
                      ]}>
                      <Icon
                        name={data.icon}
                        style={
                          this.state.currentSelected == data.index
                            ? styles.activeText
                            : styles.customText
                        }
                        active
                      />
                    </View>
                    <View style={[styles.link, {flex: 18}]}>
                      <Text
                        style={
                          this.state.currentSelected == data.index
                            ? styles.activeText
                            : styles.customText
                        }>
                        {data.text}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </Row>
        </Grid>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  user: state.session.user,
});
const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  active: {backgroundColor: colors.blueGrey0},
  passive: {},
  listItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  link: {
    paddingVertical: 15,
  },
  customText: {color: 'gray'},
  activeText: {color: colors.blueGrey9},
});

export default connect(mapStateToProps)(SideMenu);
