import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.server';

import Author from '../../components/Author';

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

const Post = ({ post }) => {
  const { title, author } = post;

  return (
    <div className='p-4'>
      <h1 className='text-6xl'>
        <Link href='/'>&larr; {title}</Link>
      </h1>
      <div>
        <Author author={author} />
      </div>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      pid: post._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { pid },
  } = context;
  const query = groq`
  *[_id == "${pid}"][0] {
    _id,
    title,
    author -> {
      _id,
      name
    }
  }
  `;

  const post = await client.fetch(query);
  console.log('pid', post);

  const props = { post };
  return {
    props,
  };
}
