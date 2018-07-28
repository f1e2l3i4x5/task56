import React, { Component } from 'react';
import { 
	View, 
	StyleSheet,
	Image 
} from 'react-native';

class Photo extends Component {
	
	static navigationOptions = {
		title: 'Photo'
	};

	render() {
		return(
			<View style={styles.container}>
				<Image
					style={styles.image} 
					source={{uri: this.props.navigation.getParam("small")}}	
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	image: {
		width: '100%',
		height: '100%'
	}
});

export default Photo;