function HomePage({ foo }) {
  return <div>Welcome to {foo}</div>;
}

export default HomePage;

export async function getStaticProps(context) {
  const props = { foo: 'bar' };
  return {
    props,
  };
}
