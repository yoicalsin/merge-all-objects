"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Merge = void 0;
const is_all_utils_1 = require("is-all-utils");
const Merge = (...objs) => {
    let payload = {}, source, key;
    let lastObj = objs[objs.length - 1];
    let { removeKeys = (lastObj === null || lastObj === void 0 ? void 0 : lastObj.removeKeys) || [], removeValues = (lastObj === null || lastObj === void 0 ? void 0 : lastObj.removeValues) || [], excludedKeys = (lastObj === null || lastObj === void 0 ? void 0 : lastObj.excludedKeys) || [], excludedValues = (lastObj === null || lastObj === void 0 ? void 0 : lastObj.excludedValues) || [], } = lastObj || {};
    if (is_all_utils_1.isArray(lastObj)) {
        excludedKeys = lastObj;
    }
    else {
        if ((lastObj === null || lastObj === void 0 ? void 0 : lastObj.removeKeys) || (lastObj === null || lastObj === void 0 ? void 0 : lastObj.removeValues) || (lastObj === null || lastObj === void 0 ? void 0 : lastObj.excludedKeys) || (lastObj === null || lastObj === void 0 ? void 0 : lastObj.excludedValues)) {
            delete objs[objs.length - 1];
        }
    }
    while (objs.length > 0) {
        source = objs.splice(0, 1)[0];
        if (is_all_utils_1.isObject(source)) {
            for (key in source) {
                if (source.hasOwnProperty(key)) {
                    const value = source[key];
                    const is = (arr, index) => {
                        if (arr.length > 0) {
                            return arr.some(exclude => {
                                if (is_all_utils_1.isRegExp(exclude) && is_all_utils_1.isString(index)) {
                                    return exclude.test(index);
                                }
                                return index === exclude;
                            });
                        }
                        return false;
                    };
                    if (is(removeValues, value) || is(removeKeys, key)) {
                    }
                    else if (is(excludedValues, value) || is(excludedKeys, key)) {
                        payload[key] = value;
                    }
                    else {
                        if (is_all_utils_1.isObject(value)) {
                            payload[key] = Merge(payload[key], value, {
                                removeKeys,
                                removeValues,
                                excludedKeys,
                                excludedValues,
                            });
                        }
                        else {
                            payload[key] = value;
                        }
                    }
                }
            }
        }
    }
    return payload;
};
exports.Merge = Merge;
exports.default = Merge;
