const home = (state = {id: 1, text: '这里是文本', completed: true}, action) => {
  switch (action.type) {
    case 'HOME':
    return{
      ...state,
      id: action.id,
      text: action.text,
      completed: false
    }

  default:
    return state
  }
}
  
  export default home
  