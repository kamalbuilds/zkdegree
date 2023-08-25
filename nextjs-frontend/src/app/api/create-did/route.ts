import axios from 'axios';
import { NextApiRequest , NextApiResponse } from 'next';
const axiosHeaders = {
  headers: {
    'DOCK-API-TOKEN': process.env.DOCK_API_TOKEN,
  },
};

const baseUrl = process.env.DOCK_API_URL;
const polygonDidBody = {
  keyType: 'bjj',
  type: 'polygonid'
};


console.log(process.env.DOCK_API_TOKEN,process.env.DOCK_API_URL,"api");

export async function POST(req : NextApiRequest, res : NextApiResponse) {

  if (req.method !== 'POST') {
    res.json({});
    return;
  }

  try {
    // Create PolygonID DID
    const didResp = await axios.post(`${baseUrl}/dids`, polygonDidBody, axiosHeaders);
    console.log(didResp.data);

    // Create Issuer Profile for DID
    const profileBody = {
      name: req.body.issuerName,
      type: 'polygonid',
      did: didResp.data.did
    };

    const result = await axios.post(
      `${baseUrl}/profiles`,
      profileBody,
      axiosHeaders
    );

    res.json(result.data);
  } catch (e) {
    console.error(e);
    res.json({ error: e.message });
  }
};
