import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (postData) => {
    const res = await fetch(`http://localhost:8000/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
    if (res.ok) {
      navigate(`/posts/${id}`);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return <PostForm heading="Edit Post" initialData={post} onSubmit={handleSubmit} />;
}

export default EditPost;
