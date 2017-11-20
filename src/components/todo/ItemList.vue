<template>
  <div class="item-list">
    <!-- filter by task name -->
    <div class="search-input">
      <input type="text" placeholder="filter by task name" v-model="searchStr">
    </div>  

    <!-- task list -->
    <ul>
      <item v-for="item in shownList" :key="item.id" :item ='item' @removeItem="removeItem"></item>
    </ul>

    <!-- task footer -->
    <div class="todo-footer">
      <div class="left">
        <span>{{leftMsg}}</span>
      </div>
      <div class="center">
        <ul>
          <li v-for="task in tasks" :key="task.type" :status="task" :class="{'active': currentTask.type===task.type}">
            <a href="" @click.prevent="currentTask = task">{{task.text}}</a>
          </li>
        </ul>
      </div>
      <div class="right">
        <button @click="clearCompleted" v-show="hasCompleted">Clear Completed</button>
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item'
import {removeTask, removeCompletedTasks, getTaskTypeData} from '../../services/todo'

export default {
  name: 'ItemList',

  props: ['items'],

  data () {
    return {
      tasks: [],
      currentTask: {},

      searchStr: ''
    }
  },

  computed: {
    leftMsg () {
      let activeTasks = this.getActive()
      let resMsg = ''

      if (activeTasks.length) {
        if (activeTasks.length === 1) {
          resMsg = '1 item left'
        } else {
          resMsg = activeTasks.length + ' items left'
        }
      } else {
        resMsg = '0 item left'
      }
      return resMsg
    },

    hasCompleted () {
      return this.getCompleted().length
    },

    shownList () {
      if (this.searchStr !== '') {
        let vm = this
        return this.filterTaskBytype().filter(function (item) {
          return item.itemName.indexOf(vm.searchStr) > -1
        })
      }
      return this.filterTaskBytype()
    }
  },

  mounted () {
    this.tasks = getTaskTypeData()
    this.currentTask = this.tasks[0]
  },

  methods: {
    removeItem (id) {
      removeTask(id)
      this.$emit('removeItem')
    },

    clearCompleted () {
      removeCompletedTasks()
      this.$emit('clearCompletedTasks')
    },

    getCompleted () {
      return this.items.filter(function (item) {
        return item.completed
      })
    },

    getActive () {
      return this.items.filter(function (item) {
        return !item.completed
      })
    },

    filterTaskBytype () {
      if (this.currentTask.type === '0') {
        return this.items
      } else if (this.currentTask.type === '1') {
        return this.getActive()
      } else {
        return this.getCompleted()
      }
    }
  },

  components: {
    Item
  }
}
</script>

<style lang='scss' scoped>
.item-list {
  width: 100%;
  max-height: 350px;
  overflow: auto;
}

.search-input {
  text-align: left;
  padding: 6px 0px;
}
</style>

<style lang="scss" scoped>
$sideWidth: 115px;
$height: 40px;

.todo-footer {
  width: 100%;
  display: table;


  .left, .right, .center {
    display: table-cell;
    height: $height;
    vertical-align: middle;
  }

  .left {
    width: $sideWidth;
  }

   .center {
    > ul {
      > li {
        display: inline-block;
        margin: auto 6px;
        padding: 3px 7px;

        &.active {
          border: 1px solid greenyellow;
        }
      }
    }
  }

   .right {
    width: $sideWidth;

    button {
      border: none;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>



