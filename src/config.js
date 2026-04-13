const base =
  process.env.REACT_APP_API_URL || 'http://localhost:8000';

/** Base URL for the API (no trailing slash). */
export const API_BASE_URL = base.replace(/\/$/, '');
