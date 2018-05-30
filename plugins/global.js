import Vue from 'vue'
import GlobalComponent from '~/components/GlobalComponent'

export default () => {
  Vue.component('global-component', GlobalComponent)
  console.log('In plugins/global.js, done registering global components:', Object.keys(Vue.options.components))
}
