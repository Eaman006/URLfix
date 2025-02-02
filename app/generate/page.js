"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Page = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState("")
  const [loading, setLoading] = useState(false)

  const generate = () => {
    if (!url || !shorturl) {
      alert("Please enter both URL and short URL text")
      return
    }

    setLoading(true)

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        setUrl("")
        setShortUrl("")
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  return (
    <div className='pt-[10%]'>
      <div className='mx-auto max-w-lg px-5 py-2 bg-[#00000028] rounded-lg border border-white'>
        <div className='text-center my-2 justify-center font-bold text-xl'>Generate your Short URLs</div>
        <div className='flex flex-col text-white gap-5 my-3'>
          <input 
            className='bg-[#ffffff28] p-4 focus:outline-purple-600 rounded-full' 
            type="text" 
            placeholder='Enter your URL here' 
            onChange={(e) => setUrl(e.target.value)} 
            value={url} 
            disabled={loading}
          />
          <input 
            className='bg-[#fcfbfb28] p-4 focus:outline-purple-600 rounded-full' 
            type="text" 
            placeholder='Enter your preferred short URL text here' 
            onChange={(e) => setShortUrl(e.target.value)} 
            value={shorturl} 
            disabled={loading}
          />
        </div>
        <div onClick={!loading ? generate : null} className='flex justify-center items-center my-5'>
          <button 
            className={`py-2 px-5 rounded-full font-bold transition-all ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-400 hover:bg-purple-600 active:bg-purple-900'
            }`}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </div>
        {loading && <div className="text-center text-white">Loading...</div>}
        {generated && (
          <code className="block text-center text-blue-800 underline">
            <Link target='_blank' href={generated}>{generated}</Link>
          </code>
        )}
      </div>
    </div>
  )
}

export default Page
