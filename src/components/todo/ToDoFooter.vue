<template>
  <div class="todo-footer">
    <div class="left">
      <span>{{leftMsg}}</span>
    </div>
    <div class="center">
      <ul>
        <li v-for="task in tasks" :key="task.type" :status="task" :class="{'active': currentTask.type===task.type}">
          <a href="" @click.prevent="filterTasks(task)">{{task.text}}</a>
        </li>
      </ul>
    </div>
    <div class="right">
      <button @click="clearCompleted" v-show="hasCompleted">Clear Completed</button>
    </div>
  </div>
</template>

<script>
import {removeCompletedTasks} from '../../services/todo'

export default {
  name: 'TodoFooter',

  props: ['items'],

  data () {
    return {
      tasks: [
        {type: '0', text: 'all'},
        {type: '1', text: 'active'},
        {type: '2', text: 'completed'}
      ],
      currentTask: {}
    }
  },

  mounted () {
    this.currentTask = this.tasks[0]
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
    }
  },

  methods: {
    filterTasks (task) {
      this.currentTask = task

      this.$emit('filterTaskByType', task.type)
    },

    clearCompleted () {
      // how to remove multi elements from array ?
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
    }
  }
}
</script>

<style lang="scss" scoped>
$sideWidth: 105px;
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



