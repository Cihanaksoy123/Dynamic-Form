import React from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {GetToPreviousFolder, GetToNextFolder} from '../store/folder';
import {Content, Container, View} from 'native-base';
import CustomButton from '../components/CustomButton';
import DirectoryList from '../components/Directory/Container';
//import Breadcrumb from 'react-native-breadcrumb';

class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <Container>
        <Content style={{padding: 10}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CustomButton
              disabled={this.props.isBackButtonPassive}
              icon="arrow-back"
              onPress={() => this.props.getToPreviousFolder()}
            />
            <CustomButton
              disabled={this.props.isNextButtonPassive}
              icon="arrow-forward"
              onPress={() => this.props.getToNextFolder()}
            />
          </View>
          <DirectoryList />
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  isNextButtonPassive: state.folder.isNextButtonPassive,
  isBackButtonPassive: state.folder.isBackButtonPassive,
});
const mapDispatchToProps = {
  getToPreviousFolder: GetToPreviousFolder,
  getToNextFolder: GetToNextFolder,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(home);
const styles = StyleSheet.create({});
