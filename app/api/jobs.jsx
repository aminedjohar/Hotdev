import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.get('https://serpapi.com/search?engine=google_jobs');
    const jobs = response.data.jobs || [];
    res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch job data' });
  }
};