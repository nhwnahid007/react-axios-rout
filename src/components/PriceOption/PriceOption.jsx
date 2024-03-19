
import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
   const {name,price,features} = option;
  return (
    <div className='bg-blue-500 flex flex-col text-white rounded-md'> 
        <h2 className="text-center">
            <span className="text-7xl">{price}</span>
            <span className="text-2xl">/Mon</span>
        </h2>
        <h4 className="text-3xl text-center my-8">{name} Membership</h4>
        <div className='pl-6 flex-grow'>
          {
            features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature> )
          }
        </div>
        <button className="btn bg-green-600 text-white font-bold mb-4 w-full rounded-lg py-2 hover:bg-green-900 hover:text-yellow-300">Button</button>
    </div>
  )
}

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption
