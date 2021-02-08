'use strict';

const Homey = require('homey');

class KEF extends Homey.App {
  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('KEF has been initialized');
  }
}

module.exports = KEF;