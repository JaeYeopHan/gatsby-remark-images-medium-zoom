<div align="center">
  <img src="https://github.com/JaeYeopHan/gatsby-remark-images-medium-zoom/blob/master/logo.png" width="480px" />
</div>

# gatsby-remark-images-medium-zoom-plugin 👋

[![npm version](https://badge.fury.io/js/gatsby-remark-images-medium-zoom.svg)](https://badge.fury.io/js/gatsby-remark-images-medium-zoom)

<p>
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

👉 This plugin requires `gatsby-remark-images` and either `gatsby-transformer-remark` **or** `gatsby-plugin-mdx`.

The `linkImagesToOriginal` option needs to be set to `false`.

### Use with `gatsby-transformer-remark`

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
            linkImagesToOriginal: false // Important!
          }
        },
        {
          resolve: `gatsby-remark-images-medium-zoom`, // Important!
          options: {
            //...
          }
        }
      ]
    }
  }
]
```

### Use with `gatsby-plugin-mdx`

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      // a workaround to solve mdx-remark plugin compat issue
      // https://github.com/gatsbyjs/gatsby/issues/15486
      plugins: [
        `gatsby-remark-images`,
        `gatsby-remark-images-medium-zoom` // Important!
      ],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
            linkImagesToOriginal: false // Important!
          }
        },
        {
          resolve: `gatsby-remark-images-medium-zoom`, // Important!
          options: {}
        }
      ]
    }
  }
]
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

In addition, this plugin has its own options:

| Property           | Type     | Default | Description                                                                                          |
| ------------------ | -------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `excludedSelector` | `string` | `null`  | The selector of excluded images to zoom in                                                           |
| `includedSelector` | `string` | `null`  | The selector of included images to zoom in on in addition to the ones parsed by gatsby-remark-images |

## Author

👤 **JaeYeopHan (Jbee)**

- Github: [@JaeYeopHan](https://github.com/JaeYeopHan)
- Twitter: [@JbeeLjyhanll](https://twitter.com/JbeeLjyhanll)

## Show your support

Give a ⭐️ if this project helped you!

<div align="center">

<sub><sup>Written by <a href="https://github.com/JaeYeopHan">@Jbee</a></sup></sub><small>✌</small>

</div>
