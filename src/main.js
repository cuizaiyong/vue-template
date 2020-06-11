import Vue from 'vue';
import App from './App';
console.log(process.env);
new Vue({
  render: h => h(App),
}).$mount('#app');
