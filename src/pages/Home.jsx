// import axios from 'axios'
// import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import MailRegistration2 from '../components/MailRegistration2'
import Navbar2 from '../components/Navbar2'
import Services from '../components/Services'
// const substackRssFeed = 'https://teamalpha.substack.com/feed'
// const rssToJsonApi = 'https://api.rss2json.com/v1/api.json'

const Home = () => {
    //     const [posts, setPosts] = useState([])

    //     let data =
    //         '{\r\n   " rss_url":"https://teamalpha.substack.com/api/v1/archive?sort=new"\r\n}'

    //     let config = {
    //         method: 'get',
    //         // maxBodyLength: Infinity,
    //         url: 'https://teamalpha.substack.com/api/v1/archive?sort=new',
    //         // headers: {
    //         //     'Content-Type': 'text/plain',
    //         // },
    //         // data: data,
    //     }

    //     useEffect(() => {
    //         fetchData()
    //     }, [])
    //     const fetchData = async () => {
    //         axios
    //             .request(config)
    //             .then((response) => {
    //                 console.log(JSON.stringify(response.data))
    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //             })
    //     }

    return (
        <>
            <Navbar2></Navbar2>
            <MailRegistration2></MailRegistration2>
            <Services></Services>
            <Footer></Footer>
        </>
    )
}
export default Home
