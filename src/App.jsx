import './App.css'
import CustomerService from './components/CustomerService'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SocialProof from './components/SocialProof'
import Testimonial from './components/Testimonial'

function App() {
    return (
        <>
            <Navbar />
            <CustomerService />
            <SocialProof />
            <Testimonial />
            <Footer />
        </>
    )
}

export default App
