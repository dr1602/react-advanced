# React + TypeScript + Vite

## To set up test with Vitest in this project, you require:


[VitestDocumentation](https://www.react-hook-form.com/)

These are the commands you'll need to install (I usually use npm):

1. Install vitest

```sh
npm i vitest --save-dev

```

2. Set in your *package.json*, site your "scripts" tag:

```sh

 "scripts": {
    "test": "vitest"
  }

```

**Please:** Do not delete the other tags/ commands that are already configured inside your "scripts" tag.

3. Inside your *vite-env.d.ts*, add the following reference/ parameter:

```md

/// <reference types='vitest'>

```
4. Install jsdom to render elements in the DOM in a node environment, as the elements of the DOM will not trully be rendered

```sh

npm i jsdm --save-dev

```

5. Library of user interaction, with the testing library of react. It also work with jest

```sh

npm i @testing-library/react @testing-library/jest-dom --save-dev

```

6. User event library from the testing library.

```sh

npm i --save-dev @testing-library/user-event

```

Para que estas pruebas funcionen, es importante que cuando generes el archivo de condifiguracion **setup.ts**, lo metas en la carpeta:

```md
src/test/setup.ts

```

Nombrar el carpeta **Test** en lugar de **test** hizo que mis pruebas no funcionaran, esto te ahorrará unos minutos.

## Redux && Redux Toolkit

Instala
1. Redux Toolkit
2. React Redux

```sh

npm i @reduxjs/toolkit react-redux

```

## React + TS + Vite continuationds
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
