import {Actions} from 'flummox';

export default class extends Actions {
  async fetch(t) {
    return new Promise(function(resolve) {
      setTimeout(resolve, t);
    });
  }
}
