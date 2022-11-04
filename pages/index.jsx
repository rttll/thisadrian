import { groq } from 'next-sanity';
import { client } from '../lib/sanity.server';
import Link from 'next/link';

const query = groq`
  *[_type == "post"] {
    _id,
    title,
    author {
      _id,
      name
    }
  }
`;

function HomePage(props) {
  const { posts } = props.data;
  return (
    <div>
      {posts.map(({ _id, title, author }) => (
        <article key={_id}>
          <Link
            href={'/post/'.concat(_id)}
            className='block p-4 hover:bg-gray-50 hover:text-gray-800'
          >
            {title}
          </Link>
        </article>
      ))}
    </div>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  const posts = await client.fetch(query);
  const props = { data: { posts } };
  return {
    props,
  };
}
