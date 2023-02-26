import Head from 'next/head';
import styles from './Layout.module.css';
import Link from 'next/link';
import { Loader } from '../Loader';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Coffee catalog website using Next.js" />
        <meta name="og:title" content="Coffee" />
      </Head>
      <header className={styles.header}>
        <Link href="/">Home</Link>
        <Link href="/list">Coffee list</Link>
      </header>
      <main>
        <Loader />
        {children}
      </main>
    </div>
  );
};
