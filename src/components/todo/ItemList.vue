<template>
  <div class="item-list">
    <ul>
      <item v-for="item in items" :key="item.id" :item ='item' @removeItem="removeItem"></item>
    </ul>
  </div>
</template>

<script>
import Item from './Item'

export default {
  name: 'ItemList',

  props: ['items'],

  data () {
    return {
    }
  },

  methods: {
    removeItem (id) {
      let index = this.items.findIndex(function (item) {
        return item.id === id
      })

      if (index !== -1) {
        this.items.splice(index, 1)
      }
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



