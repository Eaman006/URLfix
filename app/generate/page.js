"use client"
import React, { useState } from 'react'
import Link from 'next/link'


const page = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")
  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert("result generated successfully")
      })
      .catch((error) => console.error(error));
  }


  return (
    <div className='pt-[10%]'>
      <div className='mx-auto max-w-lg px-5 py-2 bg-[#00000028] rounded-lg border border-white'>
        <div className='text-center my-2 justify-center font-bold text-xl' >Generate your Short URLS</div>
        <div className='flex flex-col text-white gap-5 my-3'>
          <input className='bg-[#ffffff28] p-4 focus:outline-purple-600 rounded-full' type="text" placeholder='Enter your url here' onChange={(e) => seturl(e.target.value)} value={url} />
          <input className='bg-[#fcfbfb28] p-4 focus:outline-purple-600 rounded-full' type="text" placeholder='Enter your preffered short url text here' onChange={(e) => setshorturl(e.target.value)} value={shorturl} />
        </div>
        <div onClick={generate} className='flex justify-center items-center my-5'>
          <button className='bg-purple-400 hover:bg-purple-600 hover:active:bg-purple-900 py-2 px-5 rounded-full font-bold'>Generate</button>
        </div>
        {generated && <code>
          <Link target='_blank' href={generated}>{generated}</Link>
        </code>
        }
        
      </div>
    </div>
  )
}

export default page
