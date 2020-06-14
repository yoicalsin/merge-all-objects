import { isObject, isArray, isRegExp, isString } from 'is-all-utils';

interface Options {
   removedKeys?: any[];
   removedValues?: any[];
   excludedKeys?: any[];
   excludedValues?: any[];
   [key: string]: any;
}

/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @documentation https://github.com/yonicalsin/merge-all-objects
 */
const Merge = <T extends Options = Options>(...objs: (T | Options)[]): T => {
   let payload: Options = {},
      source: Options,
      key: string | number;
   let lastObj: any = objs[objs.length - 1] as any;

   // For add the excluded keys
   let {
      // For remove
      removedKeys = lastObj?.removedKeys || [],
      removedValues = lastObj?.removedValues || [],
      // For excluded
      excludedKeys = lastObj?.excludedKeys || [],
      excludedValues = lastObj?.excludedValues || [],
   } = lastObj || {};

   if (isArray(lastObj)) {
      excludedKeys = lastObj;
   } else {
      if (
         lastObj?.removedKeys ||
         lastObj?.removedValues ||
         lastObj?.excludedKeys ||
         lastObj?.excludedValues
      ) {
         delete objs[objs.length - 1];
      }
   }

   while (objs.length > 0) {
      source = objs.splice(0, 1)[0];
      if (isObject(source)) {
         for (key in source) {
            if (source.hasOwnProperty(key)) {
               const value = source[key];

               // Array.includes validation function including custom regular expressions
               const is = (arr: any[], index) => {
                  if (arr.length > 0) {
                     return arr.some(exclude => {
                        if (isRegExp(exclude) && isString(index)) {
                           return (exclude as RegExp).test(index as string);
                        }
                        return index === exclude;
                     });
                  }
                  return false;
               };

               if (is(removedValues, value) || is(removedKeys, key)) {
                  // empty
               } else if (is(excludedValues, value) || is(excludedKeys, key)) {
                  payload[key] = value;
               } else {
                  if (isObject(value)) {
                     payload[key] = Merge(payload[key], value, {
                        removedKeys,
                        removedValues,
                        excludedKeys,
                        excludedValues,
                     });
                  } else {
                     payload[key] = value;
                  }
               }
            }
         }
      }
   }

   return payload as T;
};

export { Merge };
export default Merge;
