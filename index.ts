import { isObject } from 'is-all-utils';

interface More {
   [key: string]: any;
}

const Merge = (...objs: More[]) => {
   var payload: More = {},
      source: More,
      key: string | Number;

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

   return payload;
};

export { Merge };
export default Merge;
