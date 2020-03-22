"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IsObject = (src) => {
    if (toString.call(src) === '[object Object]') {
        return true;
    }
    return false;
};
exports.IsObject = IsObject;
const Merge = (...objs) => {
    var payload = {}, source, key;
    while (objs.length > 0) {
        source = objs.splice(0, 1)[0];
        if (IsObject(source)) {
            for (key in source) {
                if (source.hasOwnProperty(key)) {
                    const value = source[key];
                    if (IsObject(value)) {
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
