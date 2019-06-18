<h1 align="center">Welcome to gatsby-remark-medium-zoom-images-plugin 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/JbeeLjyhanll">
    <img alt="Twitter: JbeeLjyhanll" src="https://img.shields.io/twitter/follow/JbeeLjyhanll.svg?style=social" target="_blank" />
  </a>
</p>

> [medium-zoom](https://github.com/francoischalifour/medium-zoom) plugin for gatsby with `gatsby-remark-images`

## Install

```
$ npm install --save gatsby-remark-images gatsby-remark-images-medium-zoom
# or
$ yarn add gatsby-remark-images gatsby-remark-images-medium-zoom
```

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 590
          }
        }
      ]
    }
  }
];
```

## Options

https://github.com/francoischalifour/medium-zoom#options

## Author

👤 **JaeYeopHan (Jbee)**

- Github: [@JaeYeopHan](https://github.com/JaeYeopHan)
- Twitter: [@JbeeLjyhanll](https://twitter.com/JbeeLjyhanll)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
