import { useState } from 'react'
import Navbar from '../components/Navbar'
import InsertUrl from '../components/InsertUrl'
import Clipboard from '../components/Clipboard'

function ShortUrl () {
  // const [URL, setURL] = useState('')
  const [shortURL, setShortURL] = useState<string>('')

  return (
    <>
      <Navbar />
      <InsertUrl setShortURL={setShortURL} />
      <Clipboard shortURL={shortURL} />

    </>
  )
}

export default ShortUrl
