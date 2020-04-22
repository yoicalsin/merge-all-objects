"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_all_utils_1 = require("is-all-utils");
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
const Merge = (...objs) => {
    let payload = {}, source, key;
    while (objs.length > 0) {
        source = objs.splice(0, 1)[0];
        if (is_all_utils_1.isObject(source)) {
            for (key in source) {
                if (source.hasOwnProperty(key)) {
                    const value = source[key];
                    if (is_all_utils_1.isObject(value)) {
                        payload[key] = Merge(payload[key] || {}, value);
                    }
                    else {
                        payload[key] = value;
                    }
                }
            }
        }
    }
    return payload;
};
exports.Merge = Merge;
exports.default = Merge;
