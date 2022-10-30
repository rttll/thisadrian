import { groq } from 'next-sanity';
import { client } from '../lib/sanity.server';

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
          <h1>{title}</h1>
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
