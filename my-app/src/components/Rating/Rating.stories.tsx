import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating} from "./Rating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating Stories',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};

export const EmptyRating = () => <Rating value={0} onClick={() => {}}/>
export const EmptyRating1 = () => <Rating value={1} onClick={() => {}}/>
export const EmptyRating2 = () => <Rating value={2} onClick={() => {}}/>
export const EmptyRating3 = () => <Rating value={3} onClick={() => {}}/>
export const EmptyRating4 = () => <Rating value={4} onClick={() => {}}/>
export const EmptyRating5 = () => <Rating value={5} onClick={() => {}}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState(0)
    return <Rating value={rating} onClick={setRating}/>
}

