import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useState, useEffect} from 'react';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Dataarray from './components/Dataarray';
import {Goalinput} from './components/Goalinput';
import {v4 as uuidv4} from 'uuid';

export default function App() {
  const [inputtext, setInputtext] = useState('');
  const [inputdata, setInputdata] = useState([]);
  const [ischecked, setIschecked] = useState('false');
  const [modalisvisible, setModalisvisible] = useState(false);

  console.log(inputdata);

  const goalinputshow = () => {
    console.log(1);
    setModalisvisible(true);
  };

  function goalinputhandler(event) {
    setInputtext(event);
  }
  function addgoalhandler() {
    console.log(inputtext);
    if (inputtext.length > 0) {
      setInputdata(currentinputdata => [
        ...inputdata,
        {name: inputtext, id: uuidv4()},
      ]);
      setInputtext('');
      setModalisvisible(false)

      console.log(inputdata);
    } else {
      alert('please add some text');
    }
  }

  return (
    <KeyboardAvoidingView style={styles.appcontainer}>
      <View>
        <Text style={styles.titletext}>GOAL KEEPER APP</Text>
      </View>
      <Button title="add new goal " color="white" onPress={goalinputshow} />
    

      {modalisvisible && (
        
        <Goalinput
        modalisvisible={modalisvisible}
          inputtext={inputtext}
          goalinputhandler={goalinputhandler}
          addgoalhandler={addgoalhandler}
          setModalisvisible = {setModalisvisible}

        />
      )}
      <Text style={styles.listofgoalstext}>GOAL LIST </Text>
      <Dataarray
        inputdata={inputdata}
        inputtext={inputtext}
        setInputdata={setInputdata}
        setInputtext={setInputtext}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,

    paddingTop: 70,

    backgroundColor: '#393E46',
    justifyContent: 'center',
  },
  titletext: {
    flexWrap: 'wrap',
    fontSize: 40,
    fontFamily: 'Times New Roman',
    color: '#F2DEBA',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900',
    padding: 20,
  },
  addgoalbtn: {
    backgroundColor: 'black',
  },
  inputcontainer: {
    flex: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
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
});
