import { View, Text, Pressable } from 'react-native';
import {StyleSheet} from 'react-native';


const GoalItem = (props) => {
  return (
    
    <View style={styles.goalitem} >
    <Pressable android_ripple={{color: '#210644'}} 
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({pressed}) =>  pressed && styles.pressedItem}
      >
      <Text style={styles.goalText}>{props.itemData}</Text>
    </Pressable>
    </View>
   
  );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalitem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      pressedItem: {
        opacity: 0.5
      },
      goalText: {
        color: 'white',
        padding: 8,
      }
});
