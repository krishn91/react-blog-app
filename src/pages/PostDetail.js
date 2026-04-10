import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Post not found');
        return res.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    fetch(`http://localhost:8000/posts/${id}`, { method: 'DELETE' })
      .then(() => navigate('/'))
      .catch(err => setError(err.message));
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p className="author">By {post.author}</p>
      <p className="body">{post.body}</p>
      <div className="actions">
        <Link to={`/edit/${post.id}`} className="btn btn-primary">Edit</Link>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        <Link to="/" className="btn btn-secondary">Back</Link>
      </div>
    </div>
  );
}

export default PostDetail;
