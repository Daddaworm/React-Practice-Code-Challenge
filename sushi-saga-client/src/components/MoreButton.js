import React from 'react'

const MoreButton = (props) => {

  const handlClick = () => {
    props.renderMoreSushi()
  }


    return <button onClick={handlClick}>
            More sushi!
          </button>
}

export default MoreButton