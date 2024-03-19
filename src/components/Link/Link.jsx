
import PropTypes from 'prop-types'

const Link = ({route}) => {
  return (
    <li className="mr-10 px-6 rounded-lg  hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
    <a href={route.path}>{route.name}</a>
</li>
  )
}

Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link
