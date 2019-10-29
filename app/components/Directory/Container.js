import React from 'react';
import {connect} from 'react-redux';
import {ClickFolder} from '../../store/folder';
import {Actions} from 'react-native-router-flux'
import Directory from './Component';
class Container extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Directory dataSource={this.props.currentDirectory} route={()=>Actions.Form()} onPress={(param)=>this.props.clickFolder(param)}/>
        )
    }
}

const mapStateToProps = state => ({
  currentDirectory: state.folder.currentDirectory,
  isNextButtonPassive: state.folder.isNextButtonPassive,
  isBackButtonPassive: state.folder.isBackButtonPassive,

});
const mapDispatchToProps = {
  clickFolder: ClickFolder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
