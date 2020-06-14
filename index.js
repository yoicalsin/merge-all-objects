"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Merge = void 0;
const is_all_utils_1 = require("is-all-utils");
const Merge = (...objs) => {
    let payload = {}, source, key;
    let lastObj = objs[objs.length - 1];
    let { removedKeys = (lastObj === null || lastObj === void 0 ? void 0 : lastObj.removedKeys) || [], removedValues = (lastObj === null || lastObj === void 0 ? void 0 : lastObj.removedValues) || [], excludedKeys = (lastObj === null || lastObj === void 0 ? void 0 : lastObj.excludedKeys) || [], excludedValues = (lastObj === null || lastObj === void 0 ? void 0 : lastObj.excludedValues) || [], } = lastObj || {};
    if (is_all_utils_1.isArray(lastObj)) {
        excludedKeys = lastObj;
        delete objs[objs.length - 1];
    }
    else {
        if ((lastObj === null || lastObj === void 0 ? void 0 : lastObj.removedKeys) || (lastObj === null || lastObj === void 0 ? void 0 : lastObj.removedValues) || (lastObj === null || lastObj === void 0 ? void 0 : lastObj.excludedKeys) || (lastObj === null || lastObj === void 0 ? void 0 : lastObj.excludedValues)) {
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
                    if (is(removedValues, value) || is(removedKeys, key)) {
                    }
                    else if (is(excludedValues, value) || is(excludedKeys, key)) {
                        payload[key] = value;
                    }
                    else {
                        if (is_all_utils_1.isObject(value)) {
                            payload[key] = Merge(payload[key], value, {
                                removedKeys,
                                removedValues,
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
