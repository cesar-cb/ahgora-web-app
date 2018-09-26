import React, { Component } from 'react';
import TextBox from '@/components/_ui/TextBox';
import Button from '@/components/_ui/Button';

import withContext from '@/components/HOCs/withContext';
import UserContainer from '@/components/User/UserContainer';

class User extends Component {
  state = {};

  onInput = e =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = e => {
    e.preventDefault();

    const { account, password, id } = this.state;

    this.props.UserContainer.value.setInformation({
      account,
      password,
      id
    });

    console.log(this.state);

  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)} style={{ width: '100%' }}>
        <TextBox label="Conta" name="account" onInput={e => this.onInput(e)} />
        <TextBox label="Senha" name="password" onInput={e => this.onInput(e)} />
        <TextBox label="Identificação" name="id" onInput={e => this.onInput(e)} />
        <Button>Salvar Informações</Button>
      </form>
    )
  }
}

export default withContext([UserContainer], User);
