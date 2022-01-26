// Write your code here
import {Component} from 'react'

import './index.css'

const headImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    imageUrl: headImageUrl,
    tailCount: 0,
    headCount: 0,
  }

  onClickToss = () => {
    const {headCount, tailCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let image = ''
    let heads = headCount
    let tails = tailCount

    if (tossResult === 0) {
      image = headImageUrl
      heads += 1
    } else {
      image = tailImageUrl
      tails += 1
    }
    this.setState({
      imageUrl: image,
      headCount: heads,
      tailCount: tails,
    })
  }

  render() {
    const {imageUrl, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount

    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="details">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="toss-img" />
          <button
            className="toss-coin-btn"
            type="button"
            onClick={this.onClickToss}
          >
            Toss Coin
          </button>
          <div className="results-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
