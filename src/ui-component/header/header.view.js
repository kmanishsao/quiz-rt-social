const htmlToTemplate = (htmlstr) => {
  const template = document.createElement("template")
  template.innerHTML = htmlstr
  return template.content.firstElementChild
}
export const renderViewToContainer = (content, containerKey) => {
  const container = document.querySelector(containerKey)
  container.appendChild(content)
}
export const getHeaderTemplate = () => {
  const headerHtmlStr = `<header class="mdc-top-app-bar">
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
    <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
    <span class="mdc-top-app-bar__title">Title</span>
    </section>
  </div>
  </header>`
  return htmlToTemplate(headerHtmlStr)
}

