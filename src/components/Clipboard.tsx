import { useState } from 'react'

interface ClipboardProps {
  shortURL: string
}

function Clipboard ({ shortURL } : ClipboardProps) {
  const [copyToggle, setCopyToggle] = useState(false)

  const copyToClipboard = () => {
    const input = document.createElement('input')
    input.value = shortURL
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)

    setCopyToggle(true)

    setTimeout(() => {
      setCopyToggle(false)
    }, 2000)
  }

  return (
    <div className='w-full max-w-sm'>
      <div className='mb-2 flex justify-between items-center'>
        <label className='text-sm font-medium text-gray-900 dark:text-white'>Url acortada:</label>
      </div>

      <div className='flex items-center'>
        <span className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600'>URL</span>
        <div className='relative w-full'>
          <input type='text' className='bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' value={shortURL || 'https://manucodev.com'} readOnly disabled />
        </div>

        <button onClick={copyToClipboard} className='flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700' type='button'>
          <span id='default-icon' className='inline-flex items-center'>
            <svg className={`${copyToggle && 'hidden'} w-4 h-4 me-1.5`} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 18 20'>
              <path d='M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z' />
            </svg>
            <span className={`${copyToggle && 'hidden'} text-xs font-semibold`}>Copy</span>
          </span>

          <span id='success-icon' className={`${!copyToggle && 'hidden'} inline-flex items-center`}>
            <svg className='w-4 h-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5.917 5.724 10.5 15 1.5' />
            </svg>
          </span>
        </button>
      </div>
      <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>Url acortada</p>
    </div>
  )
}

export default Clipboard
