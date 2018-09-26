import { Container } from 'unstated';


class UserContainer extends Container {
  state = {
    information: null,
  }

  initInformation = () => {
    const account = localStorage.getItem('account');
    const password = localStorage.getItem('password');
    const id = localStorage.getItem('id');

    if (account && password && id) {
      this.setState({
        information: {
          account,
          password,
          id,
        }
      });
    }
  }

  setInformation = ({ account, password, id }) =>
    this.setState({
      account,
      password,
      id,
    });
}

export default UserContainer;
