

export const category = (name) => {
  return {
    type: 'CATEGORY',
    payload: name
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}