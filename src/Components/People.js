import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import PeopleListItem from './PeopleListItem';

const People = (props) => {
  const {people} = props;
  const items = people.map((peoples) => {
    return <PeopleListItem key={peoples.name.first} people={peoples} />;
  });

  return <View style={style.peopleView}>{items}</View>;
};

const style = StyleSheet.create({
  peopleView: {
    backgroundColor: '#e2f9ff',
    width: '100%',
    alignItems: 'stretch',
  },
});

export default People;
