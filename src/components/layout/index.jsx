import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Cursor from '../ui/Cursor'

const index = () => {
    return <>
        <Cursor />
        <Header />
        <Outlet />
        <Footer />
    </>
}

export default index