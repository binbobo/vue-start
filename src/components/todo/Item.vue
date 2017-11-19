<template>
  <li class="single-item">
      <label :for="item.id" :class="{'task-completed': item.completed}">
        <input type="checkbox" :id="item.id" v-model="item.completed" />
        {{ item.itemName }}
      </label>
      <i class="close-x" @click="onRemove">x</i>
  </li>
</template>

<script>
export default {
  name: 'Item',

  props: ['item'],

  data () {
    return {
    }
  },

  methods: {
    onRemove () {
      this.$emit('removeItem', this.item.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.single-item {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  border-bottom: 1px solid #ededed;

  position: relative;

  &:hover {
    background: #eeeeee;
    .close-x {
      display: block;
    }
  }

  label input {
    &[type='checkbox'] {
      margin-right: 12px;
    }

    &.task-completed {
      text-decoration: line-through;
    }
  }
}

.close-x {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  display: none;
  cursor: pointer;
  font-size: 1.5em;
  font-weight: 200;
}
</style>



