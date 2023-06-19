import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import SideBar from '../components/sidebar';
import Home from '../pages/home';
import homeStyles from '../styles/home.module.css';
import bg from '/assets/background.png'
import sidebarStyles from '../components/sidebar.module.css'


const siteTitle = 'dominy xu';

export default function Main(children) {
  return (
    <div className={`${homeStyles.mainContainer} ${homeStyles.bg}`}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={sidebarStyles.sidebarcontainer}> 
        <SideBar></SideBar>
      </div>
      <div className={homeStyles.content}>
        <Home></Home>

      </div>
    </div>
  );
}