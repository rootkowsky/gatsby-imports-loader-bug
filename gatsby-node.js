const path = require('path');

exports.onCreateWebpackConfig = (args) => {
  const { actions } = args;
  const { setWebpackConfig } = actions;

  setWebpackConfig({
    module: {
      rules: [
        {
          test: path.resolve(__dirname, './gatsby-browser.js'),
          use: [
            {
              loader: 'imports-loader',
              options: {
                type: 'module',
                imports: [
                  {
                    syntax: 'side-effects',
                    moduleName: path.resolve(__dirname, './assets/extras.css'),
                  }
                ],
              },
            },
          ]
        }
      ]
    }
  });

}
