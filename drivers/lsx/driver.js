'use strict';

const Homey = require('homey');

class LSXDriver extends Homey.Driver {
  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.log('KEF LSX driver has been initialized');
  }
//
//  async onPair(session) {
//    const devices = [
//      {
//        name: 'KEF LSX (onPair)',
//        data: {
//          id: 'kef-lsx',
//        },
//      },
//    ];
//
//    session.setHandler('list_devices', async function (data) {
//      // emit when devices are still being searched
//      session.emit('list_devices', devices);
//
//      // return devices when searching is done
//      return devices;
//
//      // when no devices are found, return an empty array
//      // return [];
//
//      // or throw an Error to show that instead
//      // throw new Error('Something bad has occured!');
//    });
//  }

  /**
   * onPairListDevices is called when a user is adding a device and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {
    console.log('Trying to find devices');

    const discoveryStrategy = this.getDiscoveryStrategy();
    const discoveryResults = Object.values(discoveryStrategy.getDiscoveryResults());

    const devices = discoveryResults.map((discoveryResult) => {
      console.log(discoveryResult);

      return {
        name: discoveryResult.txt.name,
        data: {
          id: discoveryResult.id,
          port: discoveryResult.port,
          host: discoveryResult.host,
          ipAddress: discoveryResult.address
        },
      };
    });

    return devices;
  }
}

module.exports = LSXDriver;