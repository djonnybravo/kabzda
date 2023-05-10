import React from 'react';
import Star from "./Star/Star";

type RatingPropsType = {
    value: number
}

const Rating = (props: RatingPropsType) => {
    return (
        <div>
           <Star selected={true}/>
           <Star selected={true}/>
           <Star selected={true}/>
           <Star selected={false}/>
           <Star selected={false}/>

        </div>
    );
};

export default Rating;