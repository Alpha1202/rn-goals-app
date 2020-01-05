import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [ goals, setGoals ] = useState('');
  const [ courseGoals, setCourseGoals ] = useState([]);
  const [ isAddMode, setIsAddMode ] = useState(false)

	const handleGoalInput = (e) => {
		setGoals(e);
	};

	const handleAddGoal = () => {
    if(goals.length === 0) return;
    setCourseGoals((currentGoals) => [ ...currentGoals, {key: Math.random().toString(), value: goals} ]);
    setIsAddMode(false)
    setGoals('')
  };
  
  const handleRemoveGoal = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId)
    })
  }
  const handleCancelAddGoal = () => {
    setIsAddMode(false),
    setGoals('')
  }
	return (
		<View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput 
      cancelAddGoal={handleCancelAddGoal}
      visible={isAddMode}
      handleGoalInput={handleGoalInput}
      handleAddGoal={handleAddGoal}
      goals={goals}
      />

			<FlatList
				data={courseGoals}
				renderItem={
          itemData => <GoalItem  onDelete={handleRemoveGoal.bind(this, itemData.item.key)} title={itemData.item.value} />
        }
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	}
});
