// Write your code here

import './index.css'

const DestinationItem = props => {
  const {eachUserDetails} = props
  const {name, imgUrl} = eachUserDetails

  return (
    <li className="list_item">
      <img src={imgUrl} alt={name} className="image" />
      <p className="para">{name}</p>
    </li>
  )
}
export default DestinationItem
