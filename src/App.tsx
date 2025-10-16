import './components/Header.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Carousel from './components/Carousel.tsx';
import CollectionCards from './components/CollectionCards.tsx';

export default function App() {
  return (
    <>
      <div className='sematic'>
        <Header></Header>
        <main className='d-flex flex-column align-items-center'>
          <Carousel></Carousel>
          <CollectionCards></CollectionCards>
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}
