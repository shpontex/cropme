import { isObject } from './isObject';
import { isArray } from './isArray';

export default function nestedObjectAssign(target, ...sources){
    if (!sources.length)
        return target;

    const source = sources.shift();

    if (!Object.assign) {
      Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function(target) {
          'use strict';
          if (target === undefined || target === null) {
            throw new TypeError('Cannot convert first argument to object');
          }
    
          var to = Object(target);
          for (var i = 1; i < arguments.length; i++) {
            var nextSource = arguments[i];
            if (nextSource === undefined || nextSource === null) {
              continue;
            }
            nextSource = Object(nextSource);
    
            var keysArray = Object.keys(Object(nextSource));
            for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
              var nextKey = keysArray[nextIndex];
              var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
              if (desc !== undefined && desc.enumerable) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
          return to;
        }
      });
    }

    if (isObject(target) && isObject(source)){
        for (const key in source){
            if (isObject(source[key])){
                if (!target[key]) {
                    Object.assign(target, {[key]: {}});
                }

                nestedObjectAssign(target[key], source[key]);
            } else if (isArray(source[key])) {
                if (!target[key]) {
                    Object.assign(target, {[key]: []});
                }

                target[key] = target[key].concat(source[key]);
            } else {
                Object.assign(target, {[key]: source[key]});
            }
        }
    }

    return nestedObjectAssign(target, ...sources);
}
