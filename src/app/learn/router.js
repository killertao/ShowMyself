import Index from './index.vue'
import Generator from './generator.vue'
import Components from './components.vue'
import extendComponents from './extendComponents.vue'
import Promise from './promise.vue'
export default [
  {
    name: 'learn_index',
    path: '/learn/index',
    component: Index
  },
  {
    name: 'learn_generator',
    path: '/learn/generator',
    component: Generator
  },
  {
    name: 'learn_components',
    path: '/learn/Components',
    component: Components
  },
  {
    path: '/learn/extendComponents',
    component: extendComponents
  },
  {
    path: '/js/promise',
    component:Promise
  }
]

