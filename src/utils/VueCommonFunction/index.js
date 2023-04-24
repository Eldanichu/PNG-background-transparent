import Vue from "@/utils/imports";
import moment from 'moment';
import Chance from 'chance';

Vue.prototype.$m = moment;

/**
 * floating({min,max})
 * integer({min,max})
 * chance.hash({length: 25})
 chance.hash({casing: 'upper'})
 * color({format:{hex | rgb | 0x}})
 */
Vue.prototype.$rnd = (() => {
  return new Chance();
})();
