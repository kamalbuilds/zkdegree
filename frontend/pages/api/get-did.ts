import axios from 'axios';
import { NextResponse, NextRequest } from 'next/server';

const baseUrl = process.env.DOCK_API_URL;

const axiosHeaders = {
  headers: {
    'DOCK-API-TOKEN': process.env.DOCK_API_TOKEN,
  },
};

export default async (req: NextRequest, res: NextResponse) => {
  if (req.method !== 'GET') {
    return NextResponse.error('Method Not Allowed', 405);
  }

    const did = req.query.did; // Assuming the DID is passed as a query parameter
    // URL-encode the DID
    const encodedDid = encodeURIComponent(did);
    console.log(encodedDid);
    const apiUrl = `https://api-testnet.dock.io/dids/${encodedDid}`;

    // Now, make the API request using apiUrl
    // const data  = await axios.get('https://api-testnet.dock.io/dids/did%3Apolygonid%3Apolygon%3Amumbai%3A2qD9vqm2pmDyoN6KjxA5EoQLhBt6jd4vdrZoULopCv', axiosHeaders);

    const didResp = await axios.get(apiUrl, axiosHeaders);
    return NextResponse.json(didResp.data);
  } catch (e) {
    console.error(e);
    return NextResponse.error('Internal Server Error', 500);
  }
}
