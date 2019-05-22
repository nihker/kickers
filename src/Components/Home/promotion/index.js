import React from 'react'
import PromotioAnimation from './Animation'
import Enroll from './Enroll';

const Promotion = () => {
    return (
        <div className="promotion_wrapper" style={{background: '#ffffff'}}>
            <div className="container">
                <PromotioAnimation/>
                <Enroll/>
            </div>
        </div>
    )
}

export default Promotion