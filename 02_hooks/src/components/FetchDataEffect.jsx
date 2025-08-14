import { useEffect, useState } from "react"


const FetchDataEffect = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(r => r.json())
            .then(json => setData(json))
            .catch(e => console.log("Error caught: ", e))
        }
        getData()
    }, [])
  return (
    <div>
        <ul>
            {
                data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default FetchDataEffect