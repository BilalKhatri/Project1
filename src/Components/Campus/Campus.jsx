import React from 'react'
import './Campus.css'
import gallery1 from '../../Assets/gallery-1.png'
import gallery2 from '../../Assets/gallery-2.png'
import gallery3 from '../../Assets/gallery-3.png'
import gallery4 from '../../Assets/gallery-4.png'
import white_arrow from '../../Assets/white-arrow.png'


const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery1} alt="" className='gallery-img' />
        <img src={gallery2} alt="" className='gallery-img' />
        <img src={gallery3} alt="" className='gallery-img' />
        <img src={gallery4} alt="" className='gallery-img' />
      </div>
      <button className='btn dark-btn'>See More <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
