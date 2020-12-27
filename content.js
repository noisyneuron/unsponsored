const defaultCSS = {
  transform: "rotateZ(180deg) scale(0.5)",
  transformOrigin: "center center"
}

const config = [
  {
    match: 'google',
    domElement: '[aria-label="Ads"]',
    css: {
      transform: "rotateZ(180deg) scale(0.5)",
      transformOrigin: "center center"
    }
  },
  {
    match: 'amazon',
    domElement: '[data-component-type="s-impression-logger"]',
    css: {
      transform: "rotateZ(180deg) scale(0.5)",
      transformOrigin: "center center"
    }
  },
  {
    match: 'twitter',
    domElement: '[data-testid="placementTracking"]',
  }
]

for(let entry of config) {
  if(window.location.href.includes(entry.match)) {
    const elements = document.querySelectorAll(entry.domElement)
    elements.forEach( el => {
      const css = entry.css ? entry.css : defaultCSS
      for(let prop in css) {
        el.style[prop] = css[prop]
      }
    })
  }
}