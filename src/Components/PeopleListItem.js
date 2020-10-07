import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const PeopleListItem = (props) => {
  const {people} = props;

  const {first, title, last} = people.name;

  return (
    <TouchableOpacity onPress={() => console.log('clicado')}>
      <View style={style.peopleContainerText}>
        <Image style={style.avatar} source={{uri: people.picture.thumbnail}} />
        <Text style={style.peopleText}>{`${title} ${first} ${last}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  peopleContainerText: {
    margin: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    flexDirection: 'row',
  },
  peopleText: {
    color: 'black',
    fontSize: 20,
    flex: 7,
    paddingLeft: 15,
    marginTop: 5,
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    borderRadius: 50,
  },
});

export default PeopleListItem;
