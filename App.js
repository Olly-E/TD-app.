import { useState } from 'react';
import { Button, StyleSheet,View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import {StatusBar} from 'expo-status-bar';

export default function App() {


  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, 
      {text:enteredGoalText, id: Math.random().toString()}])
    console.log('done')
    endAddGoalHandler();
    }

    const deleteGoalHandler = (id) => {
      setCourseGoals(currentCourseGoals => {
        return currentCourseGoals.filter(goal => goal.id !== id)
      })
      
    }
  

  return (
    <>
    <StatusBar style="dark" />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc" onPress={() => startAddGoalHandler()}/>
      {modalIsVisible && <GoalInput
        onCancel={endAddGoalHandler} 
        visible={modalIsVisible} 
        onAddGoal={addGoalHandler}
       />}
      <View  style={styles.goalContainer}>
      <FlatList data={courseGoals} 
        renderItem={itemData => (
          <GoalItem onDeleteItem={deleteGoalHandler} itemData={itemData.item.text} id={itemData.item.id} />
        )}
        // if the id isn't specifically named key you have to use the keyExtractor
        keyExtractor={(item, index) => item.id}
      />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
   padding: 50,
   paddingHorizontal: 16,
   flex: 1
  },

  goalContainer: {
    flex: 5
  },

});
