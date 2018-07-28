import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet,
	Image 
} from 'react-native';

class Card extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Image 
					style={styles.image}
					source={{uri: this.props.small}}
				/>
				<Text style={styles.text}>{this.props.author}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderWidth: 0.5,
		borderRadius: 4,
		margin: 10
	},
	image: {
		height: 150,
		width: 150,
		margin: 10
	},
	text: {
		margin: 5
	}
});

export default Card;