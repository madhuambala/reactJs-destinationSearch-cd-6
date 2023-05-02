// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onClickSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const userSearchInput = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="user-container">
          <input
            type="search"
            onChange={this.onClickSearch}
            placeholder="Search"
            value={searchInput}
            className="user-input"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon"
          />
        </div>
        <ul className="list-container">
          {userSearchInput.map(eachUserItem => (
            <DestinationItem
              eachUserDetails={eachUserItem}
              key={eachUserItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
