export default function Author(props) {
  const {
    author: { name },
  } = props;
  return <div>Author: {name}</div>;
}
