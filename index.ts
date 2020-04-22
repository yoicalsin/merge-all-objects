import { isObject } from 'is-all-utils';

interface More {
   [key: string]: any;
}

/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @param {object} obj
 * @example
 * const obj1 = {
 *    app: {
 *       name: "Application"
 *    }
 * }
 * const obj2 = {
 *    app: {
 *       port: 8080
 *    }
 * }
 * Merge(obj1, obj2)
 */
const Merge = <T extends More = More>(...objs: (T | More)[]): T => {
   let payload: More = {},
      source: More,
      key: string | number;

   while (objs.length > 0) {
      source = objs.splice(0, 1)[0];
      if (isObject(source)) {
         for (key in source) {
            if (source.hasOwnProperty(key)) {
               const value = source[key];
               if (isObject(value)) {
                  payload[key] = Merge(payload[key] || {}, value);
               } else {
                  payload[key] = value;
               }
            }
         }
      }
   }

   return payload as T;
};

export { Merge };
export default Merge;
