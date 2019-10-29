import React from 'react';
import {Content, Container, View, Text} from 'native-base';
import CustomForm from '../components/customform'
export default class form extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View>
            <CustomForm>
                
            </CustomForm>
          </View>
        </Content>
      </Container>
    );
  }
}
