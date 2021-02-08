'use strict';

const Homey = require('homey');

class LSXDriver extends Homey.Driver {
  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.log('MyDriver has been initialized');
  }

  /**
   * onPairListDevices is called when a user is adding a device and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {
    return [
       {
         name: 'KEF LSX',
         data: {
           id: 'kef-lsx',
         },
       },
    ];
  }
}

module.exports = LSXDriver;