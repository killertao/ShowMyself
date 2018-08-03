import layout from './views/information_layout'
import birthday from './views/birthday_list'
import important from "./views/important_list"
export default [{
  path: "information",
  component: layout,
  children: [{
      path: "",
      component: important
    },
    {
      path: "birthday",
      component: birthday
    },
    {
      path: "important",
      component: important
    }

  ]
}]
