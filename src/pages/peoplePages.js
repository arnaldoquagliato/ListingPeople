import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

import Header from '../Components/Header';
import People from '../Components/People';

class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&&results=10')
      .then((response) => {
        const {results} = response.data;
        this.setState({
          people: results,
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Pessoas!" />
        <People people={this.state.people} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default PeoplePage;
