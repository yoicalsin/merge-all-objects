## Merge all objects

`merge-all-objects` is a function that allows you to merge thousands of objects with recursion, and with exclusions as well

<a href="https://github.com/yonicalsin/merge-all-objects"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/merge-all-objects" target="_blank">
<img src="https://img.shields.io/npm/v/merge-all-objects" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/merge-all-objects" target="_blank">
<img src="https://img.shields.io/npm/l/merge-all-objects" alt="Package License" /></a>
<a href="https://www.npmjs.com/merge-all-objects" target="_blank">
<img src="https://img.shields.io/npm/dm/merge-all-objects" alt="NPM Downloads" /></a>
<a href="https://github.com/yonicalsin/merge-all-objects" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yonicalsin/merge-all-objects"><img src="https://img.shields.io/badge/Github%20Page-merge.all.objects-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yonicalsin"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yonicalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yonicalsin.svg?style=social&label=Follow"></a>

### Installation

```bash
# For npm
npm install --save merge-all-objects

# For yarn
yarn add merge-all-objects
```

### Usage

```ts
import { Merge } from 'merge-all-objects';

// First object
const obj1 = {
   app: {
      name: 'Application',
   },
   circle: {
      one: {},
   },
   '@remove/bucle': {
      one: { one: 'First' },
   },
   '@exclude/bucle': {
      one: { one: 'First' },
   },
};

// Second object
const obj2 = {
   app: {
      port: 8080,
   },
   circle: {
      two: {},
   },
   '@remove/bucle': {
      two: { two: 'Second' },
   },
   '@exclude/bucle': {
      two: { two: 'Second' },
   },
};

const data = Merge(obj1, obj2); // accept unlimited items!
```

```json
{
   "app": {
      "name": "Application",
      "port": 8080,
      "circle": {
         "one": {},
         "two": {}
      },
      "@delete/bucle": {
         "one": { "one": "First" },
         "two": { "two": "First" }
      },
      "@exclude/bucle": {
         "one": { "one": "Second" },
         "two": { "two": "Second" }
      }
   }
}
```

### Removed (keys, values)

The option to delete objects by their keys or values is also available, as follows

```ts
Merge(obj1, obj2, {
   // Delete by key
   removedKeys: ['@circle', /^\@delete/],
   // Delete by values
   removedValues: [/^Second/, 8080],
});
```

```json
{
   "app": {
      "name": "Application",
      "circle": {
         "one": {},
         "two": {}
      },
      "@exclude/bucle": {
         "one": {},
         "two": {}
      }
   }
}
```

### Excluded (keys, values)

-  The `merge-all-objects` allows to exclude some object keys for recursion !
-  You will be assigned the last value found that matches your key !

```ts
// To add the keys to be excluded always add them at the end in the
Merge(obj1, obj2, {
   // Exclude for keys
   excludedKeys: ['circle', /^\@exclude/],
});
```

```json
{
   "app": {
      "name": "Application",
      "port": 8080,
      "circle": {
         "two": {}
      },
      "@delete/bucle": {
         "one": { "one": "First" },
         "two": { "two": "First" }
      },
      "@exclude/bucle": {
         "two": { "two": "Second" }
      }
   }
}
```

## ⭐ Support for

`merge-all-objects` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-  Github [@yonicalsin](https://github.com/yonicalsin)
-  Twitter [@yonicalsin](https://twitter.com/yonicalsin)
-  Instagram [@yoni_calsin](https://instagram.com/yoni_calsin)
-  Medium [@yonicalsin](https://medium.com/yonicalsin)

## Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`merge-all-objects` under [License MIT.](LICENSE)
