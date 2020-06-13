"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Merge = void 0;
const is_all_utils_1 = require("is-all-utils");
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
 * Merge(obj1, obj2, ["circle"])
 */
const Merge = (...objs) => {
    let payload = {}, source, key;
    let excluded = objs[objs.length - 1];
    // For add the excluded keys
    excluded = is_all_utils_1.isArray(excluded) ? excluded : [];
    while (objs.length > 0) {
        source = objs.splice(0, 1)[0];
        if (is_all_utils_1.isObject(source)) {
            for (key in source) {
                if (source.hasOwnProperty(key)) {
                    const value = source[key];
                    if (is_all_utils_1.isObject(value) && !excluded.includes(key)) {
                        payload[key] = Merge(payload[key] || {}, value, excluded);
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
