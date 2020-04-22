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
};

// Second object
const obj2 = {
   app: {
      port: 8080,
   },
};

const data = Merge(obj1, obj2); // accept unlimited items!
/*
{
   app: {
      name: "Application",
      port: 8080
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
