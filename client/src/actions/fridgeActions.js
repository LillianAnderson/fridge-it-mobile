import axios from './axiosInstance';

//functions to get fridges and add fridges on front end 
//uses reducers as part of promises to change state

export function getFridge(name, callback) {
  return function(dispatch) {
    axios.get('/api/fridge/' + name)
      .then((data) => {
        dispatch({type: 'FETCH_FRIDGE_FULFILLED', payload: data.data[0]});
        callback();
      })
      .catch(err => {
        dispatch({type: 'FETCH_FRIDGE_REJECTED', payload: err});
      });
  };
};

export function addFridge(fridge) {
  return function(dispatch) {
    axios.post('/api/fridge', {
      users: fridge.users,
      name: fridge.name
    })
      .then(({ data }) => {
        dispatch({type: 'POST_FRIDGE_FULFILLED', payload: data})
      })
      .catch(err => {
        dispatch({type: 'POST_FRIDGE_REJECTED', payload: err})
      });
  };
};

