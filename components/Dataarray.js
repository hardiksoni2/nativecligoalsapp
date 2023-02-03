import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';

const Dataarray = ({inputdata, inputtext, setInputdata, setInputtext}) => {
  return (
    <FlatList
      style={styles.goalscontainer}
      data={inputdata}
      renderItem={itemdata => {
        return (
          <View style={styles.goals}>
            <Text style={styles.goalstext}>{itemdata.item.name}</Text>
            <Button
              color="red"
              title="delete"
              onPress={() => {
                let deleteddata = inputdata.filter((tag, index) => {
                  console.log('tag', tag);
                  console.log('itemdata', itemdata.item.name);
                  return tag !== itemdata.item;
                });
                setInputdata(deleteddata);
              }}
            />
            <Button
              color={itemdata.item.name.length > 0 ? 'black' : 'green'}
              onPress={() => {
                setInputtext(itemdata.item.name);

                let editindex = inputdata.findIndex(
                  tag => tag.id == itemdata.item.id,
                );

                inputdata[editindex].name = inputtext;
              }}
              title={itemdata.item.name.length > 0 ? 'edit' : 'checked'}
            />
          </View>
        );
      }}
    />
  );
};

export default Dataarray;
const styles = StyleSheet.create({
  goalscontainer: {
    flex: 4,
    paddingTop: 50,
    backgroundColor: '#395144',
    paddingHorizontal: 5,
  },
  listofgoalstext: {
    fontSize: 20,
    // textAlign: "center",
    // alignItems: "center",
    borderBottomColor: 'red',
    backgroundColor: '#939B62',
    color: 'white',
    padding: 5,
    borderRadius: 10,
    fontWeight: '800',
    width: '70%',
  },
  goals: {
    flexDirection: 'row',
    // flex: 5,
    margin: 4,
    paddingLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 10,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#CFB997',
  },
  goalstext: {
    fontSize: 30,
    color: 'white',
    margin: 4,
  },
  checked: {
    fontSize: 30,
    color: 'red',
  },
  deletebutton: {
    // flex: 5,
    margin: 10,
    justifyContent: 'flex-end',
  },
});
