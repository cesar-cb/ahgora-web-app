import { Container } from 'unstated';

class PunchContainer extends Container {
  state = {
    response: null,
    loading: false,
    error: null
  };

  _fetch = async data => {
    try {
      const conf = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
      };

      const response = await fetch('https://ahgora-ahgora.1d35.starter-us-east-1.openshiftapps.com/api/punch', conf);

      const json = await response.json();

      return json;
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  do = async ({ account, password, id }) => {
    this.setState({ loading: true });

    const response = await this._fetch({ account, password, identity: id });

    this.setState({
      response
    });
  };
}

export default PunchContainer;
