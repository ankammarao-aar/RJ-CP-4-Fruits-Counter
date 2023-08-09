// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, values: 0}

  onMango = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({values: prevState.values + 1}))
  }

  render() {
    const {count, values} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="val">{count}</span> mangoes{' '}
            <span className="val">{values}</span> bananas
          </h1>
          <div className="fruits-card">
            <div className="button-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <div>
                <button className="mango" onClick={this.onMango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="button-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <div>
                <button className="mango" onClick={this.onBanana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
