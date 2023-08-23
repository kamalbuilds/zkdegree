import axios from 'axios';

const axiosHeaders = {
  headers: {
    'DOCK-API-TOKEN': process.env.DOCK_API_TOKEN,
  },
};

const baseUrl = process.env.DOCK_API_URL;

export default async (req, res) => {
  if (req.method !== 'GET') {
    res.status(400).json({});
    return;
  }

  try {
    const did = req.query.did; // Assuming the DID is passed as a query parameter
    // Make a request to fetch the DID information based on the provided DID
    const didResp = await axios.get(`${baseUrl}/dids/${did}`, axiosHeaders);
    res.json(didResp.data);
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: e.message });
  }
};
