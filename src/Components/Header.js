import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  render() {
    return (
      <View style={style.headerView}>
        <Text style={style.headerText}> {this.props.title} </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  headerView: {
    width: '100%',
    height: '10%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 50,
  },
});

export default Header;
