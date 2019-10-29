import React from 'react';
import {StyleSheet, ScrollView, Alert, View} from 'react-native';
//import {Input} from 'react-native-elements';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  DatePicker,
  Button,
  Text,
  List,
  ListItem,
  Body,
} from 'native-base';
//import jsondata from '../jsondata'
var jsondata = require('../jsondata.json');
class CustomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formDatas: [],
      formValue: {},
    };
  }
  componentDidMount() {
    this.setState({formDatas: jsondata});
  }
  renderPage() {
    return (Arr = this.state.formDatas.map((item, i) => {
      switch (item['type']) {
        case 'textfield':
          return (
            <Item rounded style={styles.item}>
              <Input
                onEndEditing={e =>
                  this.setValue(item['key'], e.nativeEvent.text)
                }
                style={styles.input}
                placeholder={item['label']}
              />
            </Item>
          );
        case 'datetime':
          return (
            <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText="Select date"
              textStyle={{color: 'green'}}
              placeHolderTextStyle={{color: '#d3d3d3'}}
              onDateChange={this.setDate}
              disabled={false}
            />
          );
        case 'email':
          return (
            <Item rounded style={styles.item}>
              <Input style={styles.input} placeholder={item['label']} />
            </Item>
          );
        case 'password':
          return (
            <Item rounded style={styles.item}>
              <Input
                secureTextEntry={true}
                style={styles.input}
                placeholder={item['label']}
              />
            </Item>
          );
        case 'file':
          return (
            <Item rounded style={styles.item}>
              <Input style={styles.input} placeholder={item['label']} />
            </Item>
          );
        default:
          return null;
      }
    }));
  }
  save = () => {
    Alert.alert(this.state.formValue['52792b327c0143739de53036a0e9abe3']);
    //Alert.alert(this.state.formValue.find(item=>item.key=='52792b327c0143739de53036a0e9abe3').text);
  };
  setValue = (key, text) => {
    //  var employees = this.state.formValue;
    //  employees.push({key: key, text:text});
    let obj = {
      [key]: text,
    };
    let wholeObject = this.state.formValue;
    Object.assign(wholeObject, obj);
    this.setState({
      formValue: wholeObject,
    });
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Container>
          <Content>
            <ScrollView
              style={{paddingVertical: 20, paddingHorizontal: 20,}}>
              <Form>
                {this.renderPage()}
                <Button
                  onPress={this.save}
                  style={styles.button}
                  rounded
                  success>
                  <Text>Kaydet</Text>
                </Button>
              </Form>
            </ScrollView>
          </Content>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: 35,
    marginBottom: 20,
  },
  input: {
    fontSize: 15,
  },
  button: {
    height: 35,
    width: 100,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
});

export default CustomForm;
