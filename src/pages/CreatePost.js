import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { API_BASE_URL } from '../config';

function CreatePost() {
  const navigate = useNavigate();

  const handleSubmit = async (postData) => {
    const res = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
    if (res.ok) {
      navigate('/');
    }
  };

  return <PostForm heading="Create New Post" onSubmit={handleSubmit} />;
}

export default CreatePost;
