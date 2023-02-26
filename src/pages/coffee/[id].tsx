import { Layout } from '@/components/Layout';
import { Coffee } from '@/types';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Coffee.module.css';

export default function User({ coffee }: { coffee: Coffee }) {
  const [src, setSrc] = useState(coffee?.image);

  if (!coffee.id) {
    return (
      <Layout>
        <h3>Not found</h3>
      </Layout>
    );
  }

  return (
    <Layout>
      <h2>{coffee.title}</h2>
      <Image
        className={styles.image}
        src={src}
        alt="coffee image"
        width={500}
        height={500}
        onError={() => setSrc('/images/coffee.svg')}
      />
      <p>{coffee.description}</p>
      <h3 className={styles.ingredients}>Ingridients list:</h3>
      <ul className={styles['ingredients-list']}>
        {coffee.ingredients?.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await fetch(`https://api.sampleapis.com/coffee/hot/${params?.id}`);
  const coffee = await response.json();
  return {
    props: {
      coffee
    },
  };
};
