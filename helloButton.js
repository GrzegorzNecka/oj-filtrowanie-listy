import Vue from 'vue';

const helloButton = () =>
  Vue.component('hello-button', {
    template: `
  	<div class="bg-gray-300 flex flex-row-reverse px-2 py-3">
			<button class="bg-blue-500 py-2 px-4 rounded text-white">
          Say hello 
      </button>
		</div>`
  });

export default helloButton;
