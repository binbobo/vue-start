import getters from './getter'
import actions from './actions'
import types from './mutation_types'

import {addTask, removeTask} from '../../../services/todo'

const state = {
  taskList: []
}

const mutations = {
  [types.ADD_TASK] (state, {task}) {
    addTask(task)
  },

  [types.REMOVE_TASK] (state, {id}) {
    removeTask(id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
