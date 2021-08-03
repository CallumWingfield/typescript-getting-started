import CryptoJS, { AES, enc } from 'crypto-js';

export class Crypter {
  static decrypt(payload: object, key: string) {
    return AES.decrypt(JSON.stringify(payload), key, {
      format: CryptoJSAesJson,
    }).toString(enc.Base64);
  }

  static encrypt(payload: string, key: string) {
    return AES.encrypt(payload, key, { format: CryptoJSAesJson }).toString();
  }
}

var CryptoJSAesJson = {
  stringify: function (L3M: any) {
    var n3M = {
      ct: L3M['ciphertext']['toString'](CryptoJS['enc']['Base64']),
    };
    if (L3M['iv']) {
      n3M['iv'] = L3M['iv']['toString']();
    }
    if (L3M['salt']) {
      n3M['s'] = L3M['salt']['toString']();
    }
    return JSON['stringify'](n3M);
  },
  parse: function (f3M: any) {
    var X7r = 'ct';
    var U3M = JSON['parse'](f3M);
    var a3M = CryptoJS['lib']['CipherParams']['create']({
      ciphertext: CryptoJS['enc']['Base64']['parse'](U3M[X7r]),
    });
    if (U3M['lib']) {
      a3M['lib'] = CryptoJS['enc']['Hex']['parse'](U3M['lib']);
    }
    if (U3M['s']) {
      a3M['salt'] = CryptoJS['enc']['Hex']['parse'](U3M['s']);
    }
    return a3M;
  },
};
