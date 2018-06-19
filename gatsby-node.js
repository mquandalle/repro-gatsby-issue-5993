exports.onCreateBabelConfig = ({ stage, actions }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-styled-components`,
    stage,
    options: {
      ssr: true,
    },
  })
}
