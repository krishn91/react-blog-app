import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p className="author">By {post.author}</p>
      <p>{post.body.substring(0, 150)}...</p>
      <Link to={`/posts/${post.id}`}>Read More</Link>
    </div>
  );
}

export default PostCard;
