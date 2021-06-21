import Vue from 'vue';

const searchInput = () =>
  Vue.component('search-input', {
    props: ['value'],
    template: `
    <input 
        v-on:input="$emit('input', $event.target.value)"
  
        type="text" 
        class="pl-8 p-1 bg-gray-200 w-full rounded relative" 
        placeholder="Wyszukaj kontakt"
      >`
  });

export default searchInput;
