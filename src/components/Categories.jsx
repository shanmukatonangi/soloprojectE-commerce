import React from 'react'
import styledComponents from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'


const Container = styledComponents.div`
display:flex;
padding:20px; 
`

const Categories = () => {
  return (
    <Container>
        
        {categories.map(item=>(
        <CategoryItem item={item} key={item.id}/>
         ))}
    
    </Container>
  )
}

export default Categories