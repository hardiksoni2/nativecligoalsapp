import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView,
  Modal,
  Image,
} from 'react-native';
import {image1} from '../assets/Data';

export const Goalinput = ({
  inputtext,
  goalinputhandler,
  addgoalhandler,
  modalisvisible,
  setModalisvisible,
}) => {
  return (
    <Modal animationType="slide" visible={modalisvisible}>
      <View style={styles.inputcontainer}>
      <View>
        <Text style={styles.titletext}>GOAL KEEPER APP</Text>
      </View>
        <Image source={image1} />
        <TextInput
          style={styles.inputtext}
          placeholder="enter your goal"
          onChangeText={goalinputhandler}
          value={inputtext}
        />
        <View style={styles.btnnew}>
          <Button
            color="green"
            title="ADD GOAL"
            style={styles.addgoalbtn}
            onPress={addgoalhandler}
          />
          <Button
            title="cancel "
            color="white"
            onPress={() => {
              setModalisvisible(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  addgoalbtn: {
    backgroundColor: 'black',
  },
  inputcontainer: {
    flex: 1,
    justifyContent: 'center',
    // flexDirection: 'coloum',
    backgroundColor: '#BFACE2',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,

    borderBottomWidth: 3,
  },
  inputtext: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    color: 'black',
    marginRight: 8,
    padding: 20,
    fontSize: 20,
  },
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
  btnnew: {
    flexDirection: 'row',
  },
  titletext: {
    flexWrap: 'wrap',
    fontSize: 40,
    fontFamily: 'Times New Roman',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900',
    padding: 20,
  },
});
