import Footer from '../components/Footer'
import Navbar from '../components/Navbar2'
import PaidUserConditions from '../components/PaidUserConditions'
import PaymentCondition from '../components/PaymentCondition'
import PricingConditions from '../components/PricingConditions'
const Pricing = () => {
    return (
        <>
            <Navbar></Navbar>
            <PricingConditions></PricingConditions>
            <PaidUserConditions></PaidUserConditions>
            <PaymentCondition></PaymentCondition>
            <Footer></Footer>
        </>
    )
}
export default Pricing
