//FIXED HTML
import '../styles/globals.css'
import SideBar from '../components/sidebar';

export default function App({ Component, pageProps }) {

  return (
    <>
    <SideBar/>
      <Component {...pageProps} />
      </>
  );
}
