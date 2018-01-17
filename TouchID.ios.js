/**
 * @providesModule TouchID
 * @flow
 */
'use strict';

import { NativeModules } from 'react-native';
const NativeTouchID = NativeModules.TouchID;

/**
 * High-level docs for the TouchID iOS API can be written here.
 */

export default {
  isSupported() {
    return new Promise((resolve, reject) => {
      NativeTouchID.isSupported((error, biometryType) => {
        if (error) {
          return reject(error);
        }

        resolve(biometryType);
      });
    });
  },

  authenticate(reason) {
    var authReason;

    // Set auth reason
    if (reason) {
      authReason = reason;
    // Set as empty string if no reason is passed
    } else {
      authReason = ' ';
    }

    return new Promise((resolve, reject) => {
      NativeTouchID.authenticate(authReason, error => {
        if (error) {
          return reject(error);
        }
        resolve(true);
      });
    });
  }
};