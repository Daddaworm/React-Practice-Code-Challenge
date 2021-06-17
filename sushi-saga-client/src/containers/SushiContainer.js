import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import { useState, useEffect } from 'react'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  const [index, setIndex] = useState(0)
  
  const renderFourSushi = () => {
    const fourSushis = props.sushis.slice(index, index + 4)
    return fourSushis.map(singleSushi => {
      return  <Sushi sushi={singleSushi} key={singleSushi.id}/>
    })
  }

  const renderMoreSushi = () => {
    setIndex(index + 4)
  }


  return (
    <Fragment>
      <div className="belt">
        {renderFourSushi()}
        <MoreButton renderMoreSushi={renderMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer