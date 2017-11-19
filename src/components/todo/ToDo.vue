<template>
  <div class="todo-container">
    <h1 class="todo-header">todos</h1>
    <add-item :items="items"></add-item>
    <item-list :items='items'></item-list>
  </div>
</template>

<script>
import AddItem from './AddItem'
import ItemList from './ItemList'

export default {
  name: 'ToDo',

  data () {
    return {
      items: [
        {id: '1', itemName: 'vue', completed: false},
        {id: '2', itemName: 'angularjs', completed: true},
        {id: '3', itemName: 'react', completed: false}
      ]
    }
  },

  methods: {
  },

  components: {
    AddItem,
    ItemList
  }
}
</script>

<style scoped>
.todo-container {
  width: 75%;
  margin: 0 auto;
  min-width: 300px;
  overflow: hidden;
}

.todo-header {
  font-size: 5em;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  margin: 12px auto;
}
</style>
