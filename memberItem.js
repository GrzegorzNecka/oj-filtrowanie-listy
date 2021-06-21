import Vue from 'vue';

const memberItem = () =>
  Vue.component('member-item', {
    props: ['member', 'selectedMember', 'activeClass'],

    computed: {
      setActiveClass: function() {
        if (this.activeClass === this.member.id) {
          return true;
        }
      }
    },

    template: ` 
  <div class="flex justify-between px-2 py-2">

    <p v-bind:data-id="member.id" 
    
       v-on:click="$emit('get-member-name', $event.target)"
   
       class="flex text-gray-700">
        <svg 

            v-bind:class="{ 'text-green-500' : setActiveClass }"

            class="w-2 text-gray-500  mx-2" viewBox="0 0 8 8" fill="currentColor"> <circle cx="4" cy="4" r="3" />
        </svg>

      {{member.first_name + " " + member.last_name}}

    </p>
    <p class="text-gray-500 font-thin">

      {{member.role}}

    </p>
  </div>`
  });

export default memberItem;
