<template>
  <div class="todo-container">
    <h1 class="todo-header">todos</h1>
    <add-item :items="items" @addItem="updateItems"></add-item>
    <item-list :items='items' @removeItem="updateItems"></item-list>
    <todo-footer @filterTaskByType="filterTaskByType" @clearCompletedTasks="updateItems" :items="items"></todo-footer>
  </div>
</template>

<script>
import AddItem from './AddItem'
import ItemList from './ItemList'
import TodoFooter from './TodoFooter'
import {getTasks, getTaskByType} from '../../services/todo'

export default {
  name: 'Todo',

  data () {
    return {
      items: []
    }
  },

  mounted () {
    this.items = getTasks()
  },

  methods: {
    updateItems () {
      this.items = getTasks()
    },

    filterTaskByType (type) {
      this.items = getTaskByType(type)
    }
  },

  components: {
    AddItem,
    ItemList,
    TodoFooter
  }
}
</script>

<style scoped>
.todo-container {
  width: 75%;
  margin: 0 auto;
  min-width: 535px;
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
