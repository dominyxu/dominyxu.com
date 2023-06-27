import Head from 'next/head';
import SideBar from '../components/sidebar';
import Home from './home';
import homeStyles from '../styles/home.module.css';
import sidebarStyles from '../components/sidebar.module.css';
import Script from 'next/script';
import {useRouter} from 'next/router';
import Experience from './experience';
import Interests from './interests';


const siteTitle = 'dominy xu';

export default function Index() {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <Script src="https://kit.fontawesome.com/c1d5331308.js" crossorigin="anonymous"></Script>
      </Head>
      <div className={homeStyles.mainContainer}>
        <div className={sidebarStyles.sidebarcontainer}>
          <SideBar></SideBar>
        </div>
        <div className={homeStyles.content}>
          {/*<Home></Home>*/}
          {router.pathname === '/' && <Home/>}
          {router.pathname === '/experience' && <Experience/>}
          {router.pathname === '/projects' && <Projects/>}
          {router.pathname === '/interests' && <Interests/>}

        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}