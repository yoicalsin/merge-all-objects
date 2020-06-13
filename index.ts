import { isObject, isArray, isRegExp, isString } from 'is-all-utils';

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
 *    },
 *    circle: {
 *       one: {}
 *    }
 * }
 * const obj2 = {
 *    app: {
 *       port: 8080
 *    },
 *    circle: {
 *       two: {}
 *    }
 * }
 * Merge(obj1, obj2, ["circle", /^\@delete/])
 */
const Merge = <T extends More = More>(...objs: (T | More)[]): T => {
   let payload: More = {},
      source: More,
      key: string | number;
   let excluded: any[] = objs[objs.length - 1] as any;
   // For add the excluded keys
   excluded = isArray(excluded) ? excluded : [];

   while (objs.length > 0) {
      source = objs.splice(0, 1)[0];
      if (isObject(source)) {
         for (key in source) {
            if (source.hasOwnProperty(key)) {
               const value = source[key];
               if (
                  isObject(value) &&
                  !excluded.some(exclude => {
                     if (isRegExp(exclude) && isString(key)) {
                        return (exclude as RegExp).test(key as string);
                     }
                     return key === exclude;
                  })
               ) {
                  payload[key] = Merge(payload[key] || {}, value, excluded);
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
