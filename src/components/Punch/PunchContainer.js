import { Container } from 'unstated';

class PunchContainer extends Container {
  state = {
    response: null,
    loading: false,
    error: null
  };

  _fetch = async ({ account, password, id }) => {
    try {
      this.setState({ loading: true });

      const conf = {
        method: 'POST',
        body: {
          account,
          password,
          identity: id,
          key: '',
          origin: 'pw2'
        }
      };

      const response = await fetch('http://www.ahgora.com.br/batidaonline/verifyIdentification', conf);
      const json = await response.json();

      return json;
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  do = async ({ account, password, id }) => {
    const response = await this._fetch({ account, password, id });

    this.setState({
      response
    });
  };
}

export default PunchContainer;
