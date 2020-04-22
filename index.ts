import { isObject } from 'is-all-utils';

interface More {
   [key: string]: any;
}

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
