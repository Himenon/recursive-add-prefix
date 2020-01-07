# [@himenon/recursive-add-prefix](https://github.com/Himenon/recursive-add-prefix)

[![npm version](https://badgen.net/npm/v/@himenon/recursive-add-prefix)](https://npm.im/@himenon/recursive-add-prefix)

## Usage

```bash
yarn add recursive-add-prefix
```

```ts
import { addPrefix } from "@himenon/recursive-add-prefix";

const pathMap = {
  a: "/a/b/c",
  b: {
    c: "/abc",
  },
};

addPrefix("https://example.com", pathMap);
// {
//   a: "https://example.com/a/b/c",
//   b: {
//     c: "https://example.com/abc",
//   },
// }
```

## License

MIT
