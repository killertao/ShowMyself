import birthday from './views/birthday_list.vue'
import layout from './views/information_layout.vue'
export default [{
  path: "information",
  component: layout,
  children: [{
      path: "",
      component: birthday
    },
    {
      path: "birthday",
      component: birthday
    }
  ]
}]
