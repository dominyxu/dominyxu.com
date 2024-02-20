import Head from 'next/head';
import Home from './home';
import { useRouter } from 'next/router';
import { Metadata } from 'next';


export const metadata = {
  title: 'dominy xu',
  description: 'dominy xu website and portfolio'

}

const siteTitle = 'dominy xu';

export default function Index() {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="title" content="Dominy Xu"/>
        <meta name="description" content="coolest kid of the west dominy xu" />
        <meta name="author" content="Dominy Xu"/>
        <meta name="keywords" content="ENGINEERING, CODING, SOFTWARE, STUDENT, PYTHON, C++, ACCESSIBILITY, TECH, TECHNOLOGY"/>
        <meta name="url" content="https://dominyxu.com"></meta>
        <meta name="type" content="website"/>
        <meta property="og:title" content="Dominy Xu"/>
        <meta property="og:image" content="coolest kid of the west dominy xu" />
        <meta property="og:description" content="pfp.jpeg" />
      </Head>

      {router.pathname === '/' && <Home />}
      {router.pathname === '/experience' && <Experience />}
      {router.pathname === '/projects' && <Projects />}
      {router.pathname === '/interests' && <Interests />}


    </>
  );
}