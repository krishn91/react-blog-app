import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PostForm({ initialData, onSubmit, heading }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setBody(initialData.body);
      setAuthor(initialData.author);
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await onSubmit({ title, body, author });
    setSubmitting(false);
  };

  return (
    <div className="post-form">
      <h2>{heading}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Post Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
          />
        </div>
        <div className="form-group">
          <label>Post Body</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your post content..."
          />
        </div>
        <button className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Saving...' : 'Save Post'}
        </button>
        {' '}
        <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default PostForm;
