import axios from 'axios'
import history from '../history'

//action constants

const GET_ALL_PLANTS = 'GET_ALL_PLANTS'

// action creators

const fetchAllPlants = plants => ({
  type: GET_ALL_PLANTS,
  plants
})

// thunks
export const getAllPlants = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/plants')
    const plants = data
    dispatch(fetchAllPlants(plants))
  }
}
