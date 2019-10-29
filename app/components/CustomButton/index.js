import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import colors from '../../assets/color'

const Button = props => (
  <TouchableOpacity
    style={[
      styles.button,
      props.disabled ? styles.passiveButton : styles.activeButton,
    ]}
    disabled={props.disabled}
    onPress={ props.onPress}>
    <Icon name={props.icon} style={styles.icon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    margin: 15,
    padding: 5,
    borderRadius: 100,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  passiveButton: {
    backgroundColor: '#f2eef1',
  },
  activeButton: {
    backgroundColor: colors.blueGrey8,
  },
  icon: {
    fontSize: 20,
    color: 'white',
  },
});
export default Button;
