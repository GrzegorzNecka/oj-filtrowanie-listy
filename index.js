import Vue from 'vue';
import searchInput from './searchInput';
import memberItem from './memberItem';
import helloButton from './helloButton';

const members = [
  { id: 0, first_name: 'Adam', last_name: 'Gospodarczyk', role: 'Member' },
  { id: 1, first_name: 'Przemek', last_name: 'Smyrdek', role: 'Member' },
  { id: 2, first_name: 'Marcin', last_name: 'Czarkowski', role: 'Member' }
];

searchInput();
memberItem();
helloButton();

new Vue({
  el: '#app',
  data: {
    members: [...members],
    memberName: '',
    selectedMember: 'nieznajomy',
    activeClass: ''
  },
  methods: {
    searchText: function(text) {
      this.members = [...members];

      if (typeof text === 'undefined') {
        return;
      }

      const foundMembers = this.members.filter(member => {
        return member.first_name.toLowerCase().includes(text.toLowerCase());
      });

      // this.memberName = text;
      this.members = foundMembers;
    },

    getMemberName: function(member) {
      if (member.nodeName === 'P') {
        this.activeClass = parseInt(member.dataset.id);
        this.selectedMember = member.innerText;
      }
    },

    displayMessage: function() {
      if (this.selectedMember === 'nieznajomy') {
        return;
      }
      alert(`cześć ${this.selectedMember}`);
    }
  }
});
