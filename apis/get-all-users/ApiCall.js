import { useState, useEffect } from 'react'
import style from './ApiCall.module.css'

const ApiCall = (props) => {
  const [apiCall, triggerApiCall] = useState(0)

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users/'

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        props.sendDataToParent(json)
      } catch (err) {
        console.log('error fetching data', err)
      }
    }
    fetchData()
  }, [apiCall])

  const buttonEventListener = () => {
    triggerApiCall(apiCall + 1)
  }

  return (
    <button className={style.button} onClick={() => buttonEventListener()}>
      API call Button
    </button>
  )
}

export default ApiCall;
