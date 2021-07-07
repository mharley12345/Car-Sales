export const types = {
    'ADD_FEATURE': 'ADD_FEATURE',
    'REMOVE_FEATURE': 'REMOVE_FEATURE',
  }
  
  export const addFeature = feature => {
    return { type: types.ADD_FEATURE, payload: feature };
  };
  
  export const removeFeature = feature => {
    return { type: types.REMOVE_FEATURE, payload: feature };
  };