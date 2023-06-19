<div align='center'>
<img src="https://cdn.discordapp.com/attachments/863861085471244288/1120327377675894876/image.png" width=250 />
</div>

<br /><br />

<div align='center'>
<img src="https://cdn.discordapp.com/attachments/863861085471244288/1120334047256784907/image.png" width=250 />

<br/>

![slnm-version](https://img.shields.io/badge/version-v1.0.23-pink.svg)

<a href="https://www.npmjs.com/package/axval">
  <img src="https://img.shields.io/badge/npm-axval-red.svg" alt="npm">
</a>
</div>

<br /><br /><hr />

# Installation

## 1. Install the package

```bash
npm i axval
```

```bash
yarn add axval
```

## 2. Get started

```ts typescript
import Axval from "../../index";

const verify = Axval.verify({
  type: {
    field: "email",
  },
  value: "example@email.com",
});

console.log(verify);
```

### Response:
#### Sucess:
```json
{
  "success": true,
  "message": "O valor é válido",
  "type": { "field": "email" }
}
```

#### Error:
```json
{
  "success": false,
  "message": "O valor não é válido",
  "type": { "field": "email" }
}
```

<br/><br/>


# Com amor Gustavo Cardilho ❤️
