import { useState, useEffect } from 'react'
import styles from '../../styles/Button.module.css'

const ApiCall = props => {
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

  return (
    <button
      className={styles.apiButtonOne}
      onClick={() => {
        triggerApiCall(apiCall + 1)
      }}
    >
      Api call button
    </button>
  )
}

export default ApiCall
