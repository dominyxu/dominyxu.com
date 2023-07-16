import '../styles/globals.css'
import SideBar from '../components/sidebar';
import homeStyles from '../styles/home.module.css';


export default function App({ Component, pageProps }) {

  return (
    <>
      <div className={homeStyles.mainContainer}>
        <SideBar />
        <div className='right'>
        <Component {...pageProps} />
        </div>
      </div>
    </>

  );
}
