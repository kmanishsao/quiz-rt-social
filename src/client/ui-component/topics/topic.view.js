export const topicView = (imagePath, topicName, topicId) => {
  return `<li class="mdc-grid-tile" id="${topicId}">
    <div class="mdc-grid-tile__primary">
        <img class="mdc-grid-tile__primary-content" src="${imagePath}" />
    </div>
    <span class="mdc-grid-tile__secondary">
        <span class="mdc-grid-tile__title">${topicName} </span>
    </span>
</li>`
}
