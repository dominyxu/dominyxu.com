import Head from 'next/head';
import SideBar from '../components/sidebar';
import Home from './home';
import homeStyles from '../styles/home.module.css';
import sidebarStyles from '../components/sidebar.module.css'


const siteTitle = 'dominy xu';

export default function Index() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={homeStyles.mainContainer}>
        <div className={sidebarStyles.sidebarcontainer}>
          <SideBar></SideBar>
        </div>
        <div className={homeStyles.content}>
          <Home></Home>
        </div>
      </div>
    </>
  );
}