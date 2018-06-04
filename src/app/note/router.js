import layout from './views/layout.vue'
import information from './views/information/router.js'
import note from './views/note/note.vue'

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
