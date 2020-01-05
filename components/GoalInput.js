import React from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';

const GoalInput = (props) => {
	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={props.handleGoalInput}
					value={props.goals}
				/>
				<View style={styles.buttonStyles}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.cancelAddGoal} />
                    </View>
					<View style={styles.button}>
                    <Button title="ADD" onPress={props.handleAddGoal} />
                    </View>
					
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		width: '80%',
		borderBottomColor: 'black',
		borderWidth: 1,
		padding: 10,
		marginBottom: 10
	},
	buttonStyles: {
		padding: 5,
		width: '60%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
    },
    button: {
        width: '40%',
    }
});

export default GoalInput;
