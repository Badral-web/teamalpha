import FAQs from '../components/FAQs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar2'

const FAQ = () => {
    return (
        <div className="container max-w-screen-xl flex flex-col mx-auto">
            <Navbar></Navbar>
            <FAQs></FAQs>
            <Footer></Footer>
        </div>
    )
}
export default FAQ
