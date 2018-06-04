import birthday from './birthday/birthday.vue'
import important from './important/important.vue'
import layout from './informationLayout.vue'
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
    }, {
      path: "important",
      component: important
    },
  ]
}]
