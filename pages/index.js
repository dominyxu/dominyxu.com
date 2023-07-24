import Head from 'next/head';
import Home from './home';
import {useRouter} from 'next/router';



const siteTitle = 'dominy xu';

export default function Index() {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

        {/*
        <div className={sidebarStyles.sidebarcontainer}>
          <SideBar/>
        </div>
         */}
          {/*<Home></Home>*/}
          {router.pathname === '/' && <Home/>}
          {router.pathname === '/experience' && <Experience/>}
          {router.pathname === '/projects' && <Projects/>}
          {router.pathname === '/interests' && <Interests/>}


    </>
  );
}