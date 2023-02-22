import { useRouter } from 'next/router';

export default function User() {
  const { query } = useRouter();
  return (
    <div>
      <h2>Coffee {query.id}</h2>
    </div>
  );
}
