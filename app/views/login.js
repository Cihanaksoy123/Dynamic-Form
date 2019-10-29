import React from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Icon,
} from 'native-base';
import {connect} from 'react-redux';
import {loginUser} from '../store/session';
import {Actions} from 'react-native-router-flux';
class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }
  goToHome = () => {
    this.props.loginUser(this.state.userName, this.state.password);
  };
  render() {
    return (
      <Container>
        <Content style={{padding: 10}}>
          <Text
            style={{fontSize: 40, textAlign: 'center', paddingVertical: 50}}>
             LOGİN SCREEN
          </Text>
          <Form>
            <Item style={{marginBottom: 20}} rounded>
              <Icon active name="person" />
              <Input
                placeholder="User Name"
                value={this.state.userName}
                onChangeText={userName => this.setState({userName})}
              />
            </Item>
            <Item style={{marginBottom: 20}} rounded>
              <Icon active name="lock" />
              <Input
                secureTextEntry={true}
                placeholder="Password"
                value={this.state.password}
                onChangeText={password => this.setState({password})}
              />
            </Item>
            <Button
              style={this.props.loading ? {opacity: 0.5} : {}}
              disabled={this.props.loading}
              full
              iconRight={true}
              rounded
              success
              onPress={this.goToHome}>
              <Text>Log in</Text>
              <Icon name="arrow-forward" />
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapDispatchToProps = {
  loginUser: loginUser,
};
const mapStateToProps = state => ({
  restoring: state.session.restoring,
  loading: state.session.loading,
  user: state.session.user,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(login);
