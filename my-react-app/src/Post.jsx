export default function post({ post }) {
  const { userId, id, title, body } = post;
  return (
    <div>
      <p>userId: {userId}</p>
      <p>Id: {id}</p>
      <p>Title: {title}</p>
      <p>Message: {body}</p>
    </div>
  );
}
