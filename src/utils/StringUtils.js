/**
 *
 */
import lzs from 'lz-string/libs/lz-string';

export class StringUtils {
  /**
   *
   * @param arg {String |  Number}
   * @return {boolean}
   */
  static isEmptyOrNull(arg) {
    let _v = arg + '', res = false;
    if (_v === 'undefined' || _v === 'null' || _v === '') {
      res = true;
    }

    return res;
  }

  static getString(s) {
    return StringUtils.isEmptyOrNull(s) ? '' : (s + '');
  }

  /**
   *
   * @param num {string | Number}
   * @param {Number}  [fixed]
   * @param {string} [null_str]
   * @return {Number | String}
   */
  static getNumber(num, fixed, null_str) {
    let _num = Number(num),
      _fixed = Number(fixed),
      isNan = isNaN(_num),
      isFixedNaN = isNaN(fixed);

    let res;
    if (isNan || StringUtils.isEmptyOrNull(num)) {
      return null_str || '';
    }

    if (!isNan && !StringUtils.isEmptyOrNull(num)) {
      res = +_num;
    }

    if (
      !StringUtils.isEmptyOrNull(_fixed) &&
      !isFixedNaN &&
      _fixed >= 0
    ) {
      res = (+_num.toFixed(_fixed));
    }

    return res;
  }

  static getNumberExceptZero(num,toFixed){
    return num === 0 || (num + "") === 'null' ? null : Number(num).toFixed(toFixed);
  }

  static decompress(compressed_text) {
    let __compressed_json_str = compressed_text;
    if (!__compressed_json_str) {
      return null;
    }
    let _json_str = lzs.decompressFromBase64(__compressed_json_str);
    return JSON.parse(_json_str || '{}');
  }
}
