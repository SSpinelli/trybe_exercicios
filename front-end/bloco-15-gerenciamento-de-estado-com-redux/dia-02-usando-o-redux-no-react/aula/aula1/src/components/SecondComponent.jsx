import React from "react";
import { connect } from "react-redux";
import { addAssignment } from "../actions"

class SecondComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inputValue: '' }
  }

  render() {
    const { myFirstDispatch } = this.props
    return (
      <div>
        <input 
          type="text"
          onChange={ event => this.setState({ inputValue: event.target.value })}
        />
        <button onClick={() => myFirstDispatch(this.state.inputValue)}>
          Executar qualquer tarefa
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: (state) => dispatch(addAssignment(state))
});

export default connect(null, mapDispatchToProps)(SecondComponent);
