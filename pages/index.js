import Head from 'next/head';
import SideBar from '../components/sidebar';
import Home from './home';
import homeStyles from '../styles/home.module.css';
import sidebarStyles from '../components/sidebar.module.css';
import Script from 'next/script';
import {useRouter} from 'next/router';



const siteTitle = 'dominy xu';

export default function Index() {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={homeStyles.mainContainer}>
        <div className={sidebarStyles.sidebarcontainer}>
          <SideBar/>
        </div>
        <div className={homeStyles.content}>
          {/*<Home></Home>*/}
          {router.pathname === '/' && <Home/>}
          {router.pathname === '/experience' && <Experience/>}
          {router.pathname === '/projects' && <Projects/>}
          {router.pathname === '/interests' && <Interests/>}

        </div>

      </div>
    </>
  );
}