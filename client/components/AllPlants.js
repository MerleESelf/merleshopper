import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import getAllPlants from '../store/allPlants'
import Plant from './Plant'

class AllPlants extends React.Component {
  componentDidMount() {
    this.props.getAllPlants()
  }

  render() {
    return (
      <div>
        <h2 className="headers">SHOP OUR PLANTS </h2>
        <ul className="allPlantsList">
          {this.props.plants.map(plant => (
            <div className="plant-container" key={plant.id}>
              <Plant plant={plant} />
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    plants: state.plants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPlants: () => {
      dispatch(getAllPlants())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPlants)
