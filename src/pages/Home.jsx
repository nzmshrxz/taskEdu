import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Title from '../components/Title'
import Button from '../components/Button'

const Home = () => {

 

  return (
    
      <Layout children={ <div className='p-6'>
         <Title Text1= {"Welcome to PopX"} Text2= {"lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quas suscipit deserunt."}/>
         <div className=''>
           <Button/>
         </div>
       </div>}/>

      

       
     
  
  )
}

export default Home
