import React from 'react'
import { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'


function Github() {

    // const [data, setData] = useState([])

    // useEffect(( ) => {
    //     fetch('https://github.com/adityarajput1628')
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data);
    //       setData(data);
    //     })
    // }, [])

    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-2xl'
    >github followers: {data.followers}
    <img src={data.avatar_url} alt="Avatar" width="100" height="100"/>
    </div>
  )
}

export default Github

export const githubLoader = async () => {
    const response = await fetch('https://github.com/adityarajput1628')
    return response.json()
}