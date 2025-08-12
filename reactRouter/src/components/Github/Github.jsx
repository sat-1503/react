import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data= useLoaderData()
    // const [data, setData] = useState({}); // start with an empty object

    // useEffect(() => {
    //     fetch('https://api.github.com/users/sat-1503')
    //         .then(response => response.json())
    //         .then(Data => {
    //             console.log(Data); 
    //             setData(Data);     
    //         });
    // }, []);
    // or you can do like this in below it is more optimize way..

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    );
}

export default Github;


export const githubInfoLoader= async()=>{
   const response= await fetch('https://api.github.com/users/sat-1503')
   return response.json()
}