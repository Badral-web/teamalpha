import Footer from '../components/Footer'
import MailRegistration2 from '../components/MailRegistration2'
import Navbar2 from '../components/Navbar2'
import Services from '../components/Services'

const Home = () => {
    return (
        <div className="container max-w-screen-xl flex flex-col mx-auto">
            <Navbar2 />
            <MailRegistration2 />
            <Services />
            <Footer />
        </div>
    )
}
export default Home
