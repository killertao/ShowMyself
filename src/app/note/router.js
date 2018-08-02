import layout from './layout.vue'
import information from './information/router.js'
import note from './note/note.vue'

export default [{
  path: "/",
  component: layout,
  children: [
  {
    path:"",
    component:note
  },
  {
    path: "note",
    component: note
  },
    ...information,
  ]
}]
