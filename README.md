# Issue with styled-components SSR

There is an issue with styled-components rehydration, even when using the
`ssr:true` option of `babel-plugin-styled-components` which is supposed to avoid
this particular issue.

### Run the reproduction
```
yarn install
yarn build
yarn start
```

### Description
A unique `componentId` is correctly added in the compiled JavaScript version of
the styled-component `GreenContent`, but it's not sufficient to avoid the
rehydration bug which put the wrong child component in the wrong parent
component. Interestingly there isn't any particular identifier in the
server-side rendering HTML and I wonder if that's the source of this issue.

### Opened issues
* On [Gatsby](https://github.com/gatsbyjs/gatsby/issues/5993)
* On [babel-plugin-styled-components](https://github.com/styled-components/babel-plugin-styled-components/issues/143)
