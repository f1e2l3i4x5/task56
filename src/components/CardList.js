import React, { Component } from 'react';
import { 
	ScrollView, 
	View,
	Text, 
	StyleSheet,
	TouchableOpacity 
} from 'react-native';
import Unsplash from 'unsplash-js/native';
import Card from './Card';

const CALLBACK_URL = '';

class CardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
		this.renderCards = this.renderCards.bind(this);
		this.getData = this.getData.bind(this);
	}
	componentWillMount() {
		const unsplash = new Unsplash({
			applicationId: "56c716b9931de0e2fc6e756e6adfa2a78bf735dfbe6db581ce8a5c6d71c0ac2d",
			secret: "0998bd639cc78ad52e81d15fca50928dc6c900c9e3cf4dc43b0bf199d6cb01e4",
			callbackUrl: `{CALLBACK_URL}`,
			headers: {
   				"Accept-Version": "v1"
 			}
		});
		this.getData(unsplash);
	}

	getData(unsplash) {
		unsplash.photos.listPhotos(2, 15, "latest")
			.then(response => response.json())
				.then(json => {
					this.setState({ data: json });
					console.log(json);
				});
	}

	renderCards() {
		const {navigate} = this.props.navigation;
		return this.state.data.map(item => 
			<TouchableOpacity key={item.id} onPress={() => 
				navigate('Photo', {small: item.urls.small})
			}>
				<Card 
					id={item.id} 
					small={item.urls.small} 
					author={item.user.name}
				/>
			</TouchableOpacity>
		);
	}

	static navigationOptions = {
		title: 'Photo Gallery'
	};

	render() {
		return (
			<ScrollView>
				<View style={styles.container}>
					{this.renderCards()}
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flexDirection: 'column',
		margin: 5,
		flex: 1
	}
});

export default CardList;