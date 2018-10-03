import React, { Component } from 'react';

import { userContainerType } from '@/types';

import TextBox from '@/components/_ui/TextBox';
import Button from '@/components/_ui/Button';

import withContext from '@/components/HOCs/withContext';
import UserContainer from '@/components/User/UserContainer';

class User extends Component {
  static propTypes = {
    UserContainer: userContainerType
  };

  state = {};

  onInput = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();

    const { UserContainer } = this.props;
    const { setInformation } = UserContainer.value;
    const { name, account, password, id } = this.state;

    setInformation({
      name,
      account,
      password,
      id
    });
  };

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)} style={{ width: '100%' }}>
        <TextBox label="Nome" name="name" onInput={e => this.onInput(e)} />
        <TextBox label="Conta" name="account" onInput={e => this.onInput(e)} />
        <TextBox label="Senha" name="password" onInput={e => this.onInput(e)} />
        <TextBox label="Identificação" name="id" onInput={e => this.onInput(e)} />
        <Button full>Salvar Informações</Button>
      </form>
    );
  }
}

export default withContext([UserContainer], User);
