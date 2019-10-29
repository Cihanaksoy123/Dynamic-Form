import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import {List, ListItem, Left, Icon, Body} from 'native-base';
const formItemStyles = {
  navigation: {color: 'orange', icon: 'folder'},
  form: {color: 'green', icon: 'file'},
};
const render = props => (
  <List>
    {props.dataSource.map(item => (
      <ListItem icon>
        <Left>
          <Icon
            type="FontAwesome"
            style={{fontSize: 20}}
            name={formItemStyles[item['type']].icon}
            style={{color: formItemStyles[item['type']].color}}
          />
        </Left>
        <Body>
          <TouchableOpacity
            onPress={item['type']=='navigation'?()=>props.onPress({
              key: item['key'],
              type: item['type'],
              label: item['label'],
            }):()=>props.route()}>
            <Text note>{item['label']}</Text>
          </TouchableOpacity>
        </Body>
      </ListItem>
    ))}
  </List>
);
export default render;
