import React from 'react';
import './App.css';
import ValidEmail from './components/ValidEmail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    }
    this.changeEmail = this.changeEmail.bind(this);
    this.changeSaveEmail = this.changeSaveEmail.bind(this);
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render () {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input 
            id="id-email"
            value={ email }
            type="email"
            onChange={ (event) => this.changeEmail(event.target.value) }
          />
        </label>
        <input 
          type="button" 
          data-testid="id-send" 
          value="Enviar" 
          id="btn-send"
          onClick={ () => this.changeSaveEmail(email) } 
        />
        <input 
          type="button" 
          value="Voltar" 
          id="btn-id" 
        />
        {/* <h2 data-testid="id-email-user">{ `Valor: ${saveEmail}` }</h2> */}
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
  
}

export default App;
