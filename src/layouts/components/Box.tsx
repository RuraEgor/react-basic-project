import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addFeatureNew } from "../../store/actionCreators";
import { getFeatSel } from "../../store/selectors";

// interface Ill {
// 	lll: string
// }

class Box extends Component<any> {
	
	constructor(props: any) {
		super(props);
		
		console.log("props===", props );
	}
	
	state = {
		text: 'some text'
	}
	
	clickFunck = () => {
		let elFeature: any = {
			id: Number((Math.random() * 1000).toFixed()),
			status: 'create',
			tasks: [],
			name: 'Some function 3434'
		}
		this.props.changeTask(elFeature)
	}
	
	render() {
		console.log("sssss", this.props );
		return (
			<h1 onClick={this.clickFunck}>{this.state.text}</h1>
		)
	}
}

export default connect(
	(state: any) => ({
		testStore: getFeatSel(state)
	}),
	dispatch => ({
		changeTask(newTask: any) {
			dispatch(addFeatureNew(newTask))
		}
	})
)(Box)
