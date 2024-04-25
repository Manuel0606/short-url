import React from 'react'

interface InsertUrlProps {
  setShortURL: React.Dispatch<React.SetStateAction<string>>
}

function InsertUrl ({ setShortURL }: InsertUrlProps) {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      url: { value: string }
    }
    const url = target.url.value
    setShortURL(url)
  }

  return (
    <form className='max-w-sm' onSubmit={handleSubmit}>
      <div className='mb-5'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Ingrese la URL</label>
        <input type='text' name='url' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='https://manucodev.com' required />
      </div>

      <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Acortar URL</button>
    </form>
  )
}

export default InsertUrl
