import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
import React, {useState} from 'react'


export default function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');
   

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
      }

      const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }

     

  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput style={styles.textInput} placeholder='our course goal!' 
         onChangeText={goalInputHandler} value={enteredGoalText}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title="cancel" onPress={props.onCancel} color="#f31282"/></View>
                <View style={styles.button}><Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc"/></View>
            </View>
    </View>
    </Modal>
  )
}


const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#311b6b',
        
      },
      textInput:  {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        width: '100%',
        marginRight: 8,
        padding: 8,
        alignItems: 'center',
        color: 'white',
      },
      buttonContainer:  {
        flexDirection: 'row',
        marginTop: 16,
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
      button: {
        width: 100,
        marginHorizontal: 8
      }
})