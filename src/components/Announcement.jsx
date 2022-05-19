import React from 'react'
import styledComponents from 'styled-components'

const Container =styledComponents.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:bolder;`


const Announcements = () => {
  return (
    <div>
        <Container>
            Shanmukh offers flat 30%off on your first order
        </Container>

    </div>
  )
}

export default Announcements
