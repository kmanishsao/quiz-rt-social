import {createHeader} from "./ui-component/header/header.controller"
import {createMenu} from "./ui-component/menu/menu.controller"
import {createMainContainer} from "./ui-component/main/main.controlller"
import {createPopularTopicSection} from "./ui-component/dashboard/dashboard.controller"
import {topicCltrl} from "./ui-component/topics/topic-controller"

createHeader()
createMenu()
createMainContainer()
window.loadPage = (page) => {
  switch (page) {
  case "Topics":
    topicCltrl()
    break
  case "Dashboard":
    createPopularTopicSection()
    break
  default:
    break
  }
}
window.loadPage("Dashboard")

