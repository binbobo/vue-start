export function addTask (task) {
  let existTaskData = getExistTaskData()
  existTaskData.push(task)
  localStorage.setItem('taskData', JSON.stringify(existTaskData))
}

export function removeTask (id) {
  let existTaskData = getExistTaskData()
  let index = existTaskData.findIndex(function (item) {
    return item.id === id
  })
  if (index > -1) {
    existTaskData.splice(index, 1)
    localStorage.setItem('taskData', JSON.stringify(existTaskData))
  }
}

export function updateTask (id, newTask) {
  let existTaskData = getExistTaskData()
  let index = existTaskData.findIndex(function (item) {
    return item.id === id
  })
  if (index > -1) {
    existTaskData.splice(index, 1, newTask)
    localStorage.setItem('taskData', JSON.stringify(existTaskData))
  }
}

export function removeCompletedTasks () {
  let existTaskData = getExistTaskData()
  let activeData = existTaskData.filter(function (item) {
    return !item.completed
  })
  localStorage.setItem('taskData', JSON.stringify(activeData))
}

export function getTasks () {
  return getExistTaskData()
}

export function getTaskTypeData () {
  return [
    {type: '0', text: 'all'},
    {type: '1', text: 'active'},
    {type: '2', text: 'completed'}
  ]
}

export function getTaskByName (name) {
  return getExistTaskData().filter(function (item) {
    return item.itemName.indexOf(name) > -1
  })
}

function getExistTaskData () {
  return JSON.parse(localStorage.getItem('taskData')) || []
}
