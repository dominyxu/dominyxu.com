import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import SideBar from '../components/sidebar';
import Home from '../pages/home';

export default function Main() {
  return (
    <div>
      <div>
        <SideBar></SideBar>
      </div>
      <div>
        <Home></Home>
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <section className={utilStyles.headingMd}>
            <p>i'm a 3rd year computer engineering student @ mcmasteru, seeking an  internship.
              I previously developed software for Trigon, implemented cloud automation features at the Ontario Ministry of Health.
            </p>
            <p>
              (This is a sample website - you’ll be building a site like this on{' '}
              <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
          </section>
        </Layout>
      </div>
    </div>
  );
}