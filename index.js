import Vue from "vue";

const members = [
  { id: 0, first_name: "Adam", last_name: "Gospodarczyk", role: "Member" },
  { id: 1, first_name: "Przemek", last_name: "Smyrdek", role: "Member" },
  { id: 2, first_name: "Marcin", last_name: "Czarkowski", role: "Member" }
];

Vue.component("search-input", {
  props: ["value"],
  template: `
  <input 
      v-on:input="$emit('input', $event.target.value)"

      type="text" 
      class="pl-8 p-1 bg-gray-200 w-full rounded relative" 
      placeholder="Wyszukaj kontakt"
    >`
});

Vue.component("hello-button", {
  template: `
  	<div class="bg-gray-300 flex flex-row-reverse px-2 py-3">
			<button class="bg-blue-500 py-2 px-4 rounded text-white">
          Say hello 
      </button>
		</div>`
});

Vue.component("member-item", {
  props: ["member", "selectedMember"],

  computed: {
    setActiveClass: function() {
      const name = this.member.first_name + " " + this.member.last_name;
      if (this.selectedMember === name) {
        return true;
      }
    }
  },

  template: ` 
  <div class="flex justify-between px-2 py-2">

    <p 
    
       v-on:click="$emit('get-member-name', $event.target, active)"
   
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

new Vue({
  el: "#app",
  data: {
    members: [...members],
    memberName: "",
    selectedMember: "nieznajomy"
  },
  methods: {
    searchText: function(text) {
      this.members = [...members];

      if (typeof text === "undefined") {
        return;
      }

      const foundMembers = this.members.filter(member => {
        return member.first_name.toLowerCase().includes(text.toLowerCase());
      });

      // this.memberName = text;
      this.members = foundMembers;
    },

    getMemberName: function(member, active) {
      if (member.nodeName === "P") {
        this.selectedMember = member.innerText;
      }
    },

    displayMessage: function() {
      if (this.selectedMember === "nieznajomy") {
        return;
      }
      alert(`cześć ${this.selectedMember}`);
    }
  }
});
