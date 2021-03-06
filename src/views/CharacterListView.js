import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
// import actions
import { fetchChars } from '../actions';

class CharacterListView extends React.Component {
 constructor() {
  super();
 }

 componentDidMount() {
  // call our action
  this.props.fetchChars();
  //   this.props.fetching = false;
 }

 render() {
  //   console.log('chars in state: ', this.props.characters);
  if (this.props.fetching) {
   // return something here to indicate that you are fetching data
   <h1>Loading</h1>;
  }
  return (
   <div className="CharactersList_wrapper">
    <CharacterList characters={this.props.characters} />
   </div>
  );
 }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = function(state) {
 console.log('state in mstp: ', state);
 return {
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
 };
};

export default connect(
 mapStateToProps /* mapStateToProps replaces null here */,
 {
  fetchChars,
  /* action creators go here */
 }
)(CharacterListView);
