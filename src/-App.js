import PropTypes from 'prop-types'

const foodLike = [
  {
    id: 1,
    name: "ramen",
    image: "",
    alt: '라면',
    rating: 5.0
  },
  {
    id: 2,
    name: "pizza",
    image: "",
    alt: '피자',
    rating: 4.5
  }
]

function App() {
  return (
    <div>
      {
        foodLike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))
      }
    </div>
  )
}

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
  </div>
  )
}

Food.ProtoTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}
export default App