import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) => {
      if (url === router.asPath) {
        setLoading(false);
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return loading ? (
    <div className={styles.loader}>
      <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" />
    </div>
  ) : null;
};
