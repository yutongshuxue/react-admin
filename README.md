# 1、把 webpack 配置文件显示出来

    npm eject

# 2、安装路由

    npm install react-router-dom --save-dev

# 3、样式处理,该版本内置了 sass

    样式重置

      在public/reset.css

      <link rel="stylesheet" href="%PUBLIC_URL%/reset.css">

# 4、安装 antd

    npm install antd --save

    在入口文件index.js中引入

      import 'antd/dist/antd.min.css';

      注意：官网是引入import 'antd/dist/antd.css'会报错

    按需加载配置

      npm install babel-plugin-import --save-dev

      在webpack.config.js中搜索‘babel-loader’并找到‘
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: paths.appSrc,
              loader: require.resolve('babel-loader')’这个位置
              在该位置的plugin改为以下：

              plugins: [
                  [isEnvDevelopment &&
                    shouldUseReactRefresh &&
                    require.resolve('react-refresh/babel')],
                    ['import',{libraryName:'antd',style:'css'}]
                ].filter(Boolean),

# 5、跨域配置

    安装： npm i http-proxy-middleware axios

    配置: 在src/setupPrxoy.js中写入跨域配置

      写入：

        const { createProxyMiddleware } = require('http-proxy-middleware');

        module.exports = function(app){
          app.use(createProxyMiddleware('/api',{
            target:'http://localhost:3090',
            changeOrigin: true,
            pathRewrite:{
              '^/api':''
            }
          }))

        }

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
