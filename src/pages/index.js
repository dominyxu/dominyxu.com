import Head from 'next/head';
import SideBar from '../components/sidebar';
import Home from '../pages/home';
import homeStyles from '../styles/home.module.css';
import sidebarStyles from '../components/sidebar.module.css'


export default function Index() {
  return (
    <div className={`${homeStyles.mainContainer}`}>
      <Head>
        <title>dominy xu</title>
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