export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
})

export const toggleToDoCompleted = id => ({
  type: 'TOGGLE_COMPLETED',
  id
})