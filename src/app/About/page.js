'use client';

import UserCard from '@/Components/UserCard';

export default function Getaboutus(){
    return(
        <>
        <h1 className="bg-red-300 text-center p-5 text-2xl font-bold mb-4">About Us</h1>
        <p className="mb-6">
        Welcome to the About Us page. Below is a brief overview of one of our amazing team members.
         </p>
        <div ><UserCard /></div>
        </>
    );
}