// import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DotLoader } from "react-spinners";

const Phones = () => {
    const [phones,setPhones] = useState([])
    const [loading,setLoading] =useState(true)
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        //#Axios

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phonesWithFakeData=phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1]),
                    
                }
                return obj;
            })
            console.log(phonesWithFakeData);
            setPhones(phonesWithFakeData);
            setLoading(false);
        })



    },[])
  
    return (
        <div>
         <h2 className="text-5xl">Phones: {phones.length}</h2> 
        { loading && <DotLoader className='w-20 mx-auto mt-5' color="purple" />  }
         <BarChart width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Legend></Legend>
          <CartesianGrid></CartesianGrid>
          <ResponsiveContainer></ResponsiveContainer>
        </BarChart>
        </div>
    );
};

export default Phones;