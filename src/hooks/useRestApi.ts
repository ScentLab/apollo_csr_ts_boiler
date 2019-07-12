import { useState, useEffect } from 'react'
import Axios from 'axios'

export const useRestGet = (options) => {
  const { url } = options
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUrl = async () => {
    try {
      const { data } = await Axios.get(url)
      setPayload(data)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUrl()
  }, [])

  return { payload, loading, error }
};

export const useRestPost = (url) => {
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const postUrl = async () => {
    try {
      const { data } = await Axios.post(url)
      setPayload(data)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    postUrl()
  }, [])

  return { payload, loading, error }
}

/*
[example] useRestGet

export default () => {
  const options = {url: 'https://www.example.com'}
  const { payload, loading, error } = useRestGet(options)
  return (
    <div>
      {loading ?
        <div>now loading...</div> :
        error ?
          <div>now error!</ div > :
          <div>{payload} </div>
      }
    </div>
  )
}

[example] useRestPost

export default () => {
  const options = {url: 'https://www.example.com'}
  const { payload, loading, error } = useRestPost(options)
  return (
    <div>
      {loading ?
        <div>now loading...</div> :
        error ?
          <div>now error!</ div > :
          <div>{payload} </div>
      }
    </div>
  )
}
*/