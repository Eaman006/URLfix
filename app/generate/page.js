"use client"
import React, { useState } from 'react'


const page = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState(false)
  
  return (
    <div>
      <div className=' mx-auto max-w-lg'>
      <div>Generate your Short URLS</div>
      <div className='flex flex-col text-black gap-5'>
      <input className='p-4 focus:outline-purple-600' type="text" placeholder='Enter your url here' onChange={(e)=>seturl(e.target.value)} value={url} />
      <input className='p-4 focus:outline-purple-600' type="text" placeholder='Enter your preffered short url text here' onChange={(e)=>setshorturl(e.target.value)} value={shorturl} />
      </div>
      <button>Generate</button>
      </div>
    </div>
  )
}

export default page
