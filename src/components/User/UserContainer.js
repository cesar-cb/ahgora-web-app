import { Container } from 'unstated';

class UserContainer extends Container {
  state = {
    information: null,
    error: false,
  };

  initInformation = () => {
    const name = localStorage.getItem('name');
    const account = localStorage.getItem('account');
    const password = localStorage.getItem('password');
    const id = localStorage.getItem('id');

    if (account && password && id) {
      this.setState({
        information: {
          name,
          account,
          password,
          id,
        },
      });
    }
  };

  setInformation = ({ name, account, password, id }) => {
    try {
      localStorage.setItem('name', name);
      localStorage.setItem('account', account);
      localStorage.setItem('password', password);
      localStorage.setItem('id', id);

      this.setState({
        information: {
          name,
          account,
          password,
          id,
        },
      });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  resetInformation = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('account');
    localStorage.removeItem('password');
    localStorage.removeItem('id');
    localStorage.removeItem('last_response');

    this.setState({
      information: null,
    });
  };
}

export default UserContainer;
