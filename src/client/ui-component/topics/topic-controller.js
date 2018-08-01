import {topicView} from "./topic.view"

const topicCltrl = () => {
  const obj = {
    "test1": {
      "topicText": "Politics",
      "topicUrl": "",
      "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
      "createdDate": "11/11/2018",
      "createdBy": 1,
      "modifiedBy": 1,
      "modifiedDate": "11/11/2018",
      "published": true,
    },
    "test2": {
      "topicText": "Sports",
      "topicUrl": "",
      "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
      "createdDate": "11/11/2018",
      "createdBy": 1,
      "modifiedBy": 1,
      "modifiedDate": "11/11/2018",
      "published": true,
    },
    "test3": {
      "topicText": "Envioments",
      "topicUrl": "",
      "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
      "createdDate": "11/11/2018",
      "createdBy": 1,
      "modifiedBy": 1,
      "modifiedDate": "11/11/2018",
      "published": true,
    },
  }

  let topics = ""

  for (const newTopic in obj) {
    topics += topicView(obj[newTopic].topicImage, obj[newTopic].topicText, newTopic)
  }

  render(topics)
}

const render = (topics) => {
  const html = `<div class="mdc-grid-list">
                <ul class="mdc-grid-list__tiles">
                    ${topics}
                </ul>
            </div>`
  const container = document.querySelector("main")
  container.innerHTML = html
}

export {
  topicCltrl,
}
