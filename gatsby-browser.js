import mediumZoom from 'medium-zoom'

// @see https://github.com/francoischalifour/medium-zoom#options
const defaultOptions = {
  margin: 24,
  background: '#fff',
  scrollOffset: 40,
  container: null,
  template: null,
  zIndex: 999,
}

// @see https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-remark-images/src/constants.js#L1
const imageClass = '.gatsby-resp-image-image'

export const onRouteUpdate = (_, pluginOptions) => {
  const options = { ...defaultOptions, ...pluginOptions }
  const { zIndex } = { ...defaultOptions, ...pluginOptions }

  // Inject styles.
  // Add z-index
  const styles = `
    .medium-zoom-overlay, .medium-zoom-image {
      z-index: ${zIndex};
    }
  `

  const node = document.createElement(`style`)
  node.id = `medium-zoom-styles`
  node.innerHTML = styles
  document.head.appendChild(node)

  // Add transition
  const imageElements = document.querySelectorAll(imageClass)

  Array.from(imageElements).forEach(imageElement => {
    const onImageLoad = () => {
      imageElement.style.transition =
        'opacity 0.5s, transform .3s cubic-bezier(.2,0,.2,1)'
      imageElement.removeEventListener('load', onImageLoad)
    }
    imageElement.addEventListener('load', onImageLoad)
  })

  mediumZoom(imageElements, options)
}
