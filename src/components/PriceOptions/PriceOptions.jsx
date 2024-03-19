

import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    
   const priceOptions = [
    {
      "id": 1,
      "name": "Basic",
      "price": 29.99,
      "features": [
        "Access to cardio machines",
        "Access to weightlifting area",
        "Locker room access"
      ]
    },
    {
      "id": 2,
      "name": "Standard",
      "price": 49.99,
      "features": [
        "Access to cardio machines",
        "Access to weightlifting area",
        "Locker room access",
        "Access to group fitness classes"
      ]
    },
    {
      "id": 3,
      "name": "Premium",
      "price": 79.99,
      "features": [
        "Access to cardio machines",
        "Access to weightlifting area",
        "Locker room access",
        "Access to group fitness classes",
        "Access to swimming pool",
        "Access to sauna"
      ]
    },
    {
      "id": 4,
      "name": "Platinum",
      "price": 99.99,
      "features": [
        "Access to cardio machines",
        "Access to weightlifting area",
        "Locker room access",
        "Access to group fitness classes",
        "Access to swimming pool",
        "Access to sauna",
        "Unlimited tanning sessions",
        "Access to personal trainer"
      ]
    }
  ];


  return (
    <div className='m-12'>
      <h2 className='text-5xl'>Best price in the town</h2>
     <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {
          priceOptions.map(option => <PriceOption 
              key={option.id}
              option={option}
          ></PriceOption> )
        }
     </div>
    </div>
  )
}

PriceOptions.propTypes = {

}

export default PriceOptions
