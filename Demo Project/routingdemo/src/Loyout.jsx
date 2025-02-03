
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Loyout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Loyout