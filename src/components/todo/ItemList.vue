<template>
  <div class="item-list">
    <ul>
      <item v-for="item in items" :key="item.id" :item ='item' @removeItem="removeItem"></item>
    </ul>
  </div>
</template>

<script>
import Item from './Item'
import {removeTask} from '../../services/todo'

export default {
  name: 'ItemList',

  props: ['items'],

  data () {
    return {
    }
  },

  methods: {
    removeItem (id) {
      removeTask(id)
      this.$emit('removeItem')
    }
  },

  components: {
    Item
  }
}
</script>

<style scoped>
.item-list {
  width: 100%;
  max-height: 350px;
  overflow: auto;
}
</style>



