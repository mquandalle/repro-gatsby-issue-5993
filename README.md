# Issue with styled-components SSR

When using the Gatsby styled-component plugin Server side rendering is currently
broken if the very first rehydration doesn't match perfectly the SSR version —
instead of having a small flash a client rendering as it does without this
plugin.

This repository contains a minimal reproduction of the issue
https://github.com/gatsbyjs/gatsby/issues/5993:

```
yarn install
yarn build
yarn start
```
