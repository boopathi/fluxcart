import {Store} from 'flummox';

export default class extends Store {
  constructor(flux) {
    super();

    const actionids = flux.getActionIds('home');
    this.registerAsync(
      actionids.fetch,
      this.beginFetch,
      this.successFetch,
      this.errorFetch
    );

    this.state = {
      loading: true,
    };

  }
  beginFetch() {
    this.setState({
      loading: true
    });
  }
  successFetch(resp) {
    this.setState({
      loading: false
    });
  }
  errorFetch(resp) {
    this.setState({
      loading: false
    });
    console.log(resp);
  }
}
