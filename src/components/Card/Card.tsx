import { Coffee } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Card.module.css';

export const Card = ({ coffee }: { coffee: Coffee }) => {
  const [src, setSrc] = useState(coffee.image);
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={src}
        alt="coffee image"
        width={500}
        height={500}
        onError={() => setSrc('/images/coffee.svg')}
      />
      <div>
        <Link href={`coffee/${coffee.id}`}>
          <h2>{coffee.title}</h2>
        </Link>
        <p>{coffee.description}</p>
      </div>
    </div>
  );
};
