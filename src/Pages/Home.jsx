import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../Components/Card";
import '../Styles/Home.css'
function Home() {
    const [posts, setPosts] = useState([])

    const getData = async () => {
        const { data } = await axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts");
        console.log(data);
        setPosts(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="Home">
            <div className="Contents">
                {
                    posts.map((data) => (
                        <Card key={data.id} cardData={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
