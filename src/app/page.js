"use client"
import axios from 'axios';
import { ScanLine } from 'lucide-react';
import { useState } from 'react';
import BrokenTable from './components/BrokenTable';
const Home = () => {
  const [url, setUrl] = useState('');
  const [brokenLinks, setBrokenLinks] = useState([]);
  const [totalLinks, setTotalLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  
  const checkLinks = async () => {
    try {
      if (!url){ alert("Please enter a URL"); return;}
      setLoading(true);
      const res = await axios.post(process.env.BACKEND_URL + "/api/v1/checkURL", { url });
      setBrokenLinks(res.data.brokenLinks);
      setTotalLinks(res.data.links);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  };

  
  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col">
      <header className=" block justify-center text-center w-full p-4">
        <h1 className="text-3xl md:text-4xl font-righteous font-semibold tracking-wide">Broken Finder</h1>
      </header>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center gap-4 w-full max-w-md mx-auto">
          <input
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            name="url"
            placeholder="Enter the URL you want to check"
            className="text-slate-950 rounded-full w-full px-4 py-2 border focus:outline-none focus:shadow-outline placeholder-text-slate-900"
          />
          <button
            onClick={checkLinks}
            className="px-4 py-2 rounded-full bg-blue-500 text-white font-righteous font-semibold"
          >
            <ScanLine />
          </button>
        </div>
      </div>
      <div className=" flex  flex-1 flex-row justify-center text-center">
        {loading ? (
          <div
  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    ></span>
</div>
        ):(<></>)}
        {(!loading && err) && (<p className='text-red-500 text-xl'>Error checking links</p>)}
        {!loading &&  totalLinks.length > 0 ? (
          <div>
            {brokenLinks.length === 0 ? (
              <p className='text-green-500 text-xl'>All {totalLinks.length} links are okay!</p>
            ) : (
              <div>
                <p className='text-red-500 text-xl '>There are broken links!</p>
               <BrokenTable brokenLinks={brokenLinks} />
              </div>
            )}
          </div>
        ) : null}
      </div>
      <div className="text-center p-4">
        <h3>Broken Link Finder Made with Next.js and Node.js ❤️</h3>
      </div>
    </div>
  );
};

export default Home;
