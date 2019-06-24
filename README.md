<div align="center">
  <img src="https://github.com/JaeYeopHan/gatsby-remark-images-medium-zoom/blob/master/logo.png" width="480px" />
</div>

# gatsby-remark-images-medium-zoom-plugin 👋

<p>
  <img src="https://img.shields.io/badge/version-1.2.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/JbeeLjyhanll">
    <img alt="Twitter: JbeeLjyhanll" src="https://img.shields.io/twitter/follow/JbeeLjyhanll.svg?style=social" target="_blank" />
  </a>
</p>

> [medium-zoom](https://github.com/francoischalifour/medium-zoom) plugin for gatsby with `gatsby-remark-images`

## 🗂 Use Case

- [gatsby-starter-bee](https://github.com/JaeYeopHan/gatsby-starter-bee)

## 🚚 Install

```
$ npm install --save gatsby-remark-images-medium-zoom
$ npm install --save gatsby-remark-images gatsby-transformer-remark
# or
$ yarn add gatsby-remark-images-medium-zoom
$ yarn add gatsby-remark-images gatsby-transformer-remark
```

## 🚀 How to use

👉 This plugin requires `gatsby-remark-images` and `gatsby-transformer-remark`. You have to set the `linkImagesToOriginal` option to false in gatsby-remark-images.

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
            linkImagesToOriginal: false // point!
          }
        },
        {
          resolve: `gatsby-remark-images-medium-zoom`, // point!
          options: {
            //...
          }
        }
      ]
    }
  }
];
```

## ⚙ Options

https://github.com/francoischalifour/medium-zoom#options

| Property       | Type                                  | Default  | Description                                                |
| -------------- | ------------------------------------- | -------- | ---------------------------------------------------------- |
| `margin`       | `number`                              | `0`      | The space outside the zoomed image                         |
| `background`   | `string`                              | `"#fff"` | The background of the overlay                              |
| `scrollOffset` | `number`                              | `40`     | The number of pixels to scroll to close the zoom           |
| `container`    | `string` \| `HTMLElement` \| `object` | `null`   | The viewport to render the zoom in                         |
| `template`     | `string` \| `HTMLTemplateElement`     | `null`   | The template element to display on zoom                    |
| `zIndex`       | `number`                              | `999`    | The number of z-index of overlay element and image element |

## Author

👤 **JaeYeopHan (Jbee)**

- Github: [@JaeYeopHan](https://github.com/JaeYeopHan)
- Twitter: [@JbeeLjyhanll](https://twitter.com/JbeeLjyhanll)

## Show your support

Give a ⭐️ if this project helped you!

<div align="center">

<sub><sup>Written by <a href="https://github.com/JaeYeopHan">@Jbee</a></sup></sub><small>✌</small>

</div>
