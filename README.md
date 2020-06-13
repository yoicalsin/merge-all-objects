## Merge all objects

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
};

// Second object
const obj2 = {
   app: {
      port: 8080,
   },
   circle: {
      two: {},
   },
};

const data = Merge(obj1, obj2); // accept unlimited items!
/*
{
   app: {
      name: "Application",
      port: 8080,
      circle: {
         one: {},
         two: {}
      }
   }
}
*/
```

### Excluded

`merge-all-objects` allows you to exclude some keys from an object, as follows

-  for example we are going to exclude the circle key assuming that circle contains an infinite loop of objects, to avoid a collapse problem, we will avoid it adding an array of strings the keys we want to exclude, **the keys have to be added always as last parameter of the Merge function**

-  the key to be excluded will not be iterated, it will simply be assigned the last key among all the objects entered

```ts
// To add the keys to be excluded always add them at the end in the
Merge(obj1, obj2, ['circle']); // accept unlimited items!
/*
{
   app: {
      name: "Application",
      port: 8080,
      circle: {
         two: {}
      }
   }
}
*/
```

## ⭐ Support for

`merge-all-objects` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-  Author [Yoni Calsin](https://github.com/yoicalsin)
-  Twitter [Yoni Calsin](https://twitter.com/yoicalsin)

## Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`merge-all-objects` under [License MIT.](LICENSE)
