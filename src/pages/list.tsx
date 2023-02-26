import { Card } from '@/components/Card';
import { Layout } from '@/components/Layout';
import { Coffee } from '@/types';
import { GetStaticProps } from 'next';
import styles from '../styles/List.module.css';

const List = ({ coffee }: { coffee: Coffee[] }) => {
  return (
    <Layout>
      <h1>Coffee list</h1>
      <div className={styles.cards}>
        {coffee?.map(coffee => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://api.sampleapis.com/coffee/hot`);
  const coffee = await response.json();
  return {
    props: {
      coffee,
    },
  };
}

export default List;
