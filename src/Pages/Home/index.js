import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/Menu';
import { useState } from 'react';
import LinkItem from '../../components/LinkItem';
import { saveLink } from '../../services/storeLinks'

import api from '../../services/api'

export default function Home() {
  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    if (link !== '') {
      try {
        const response = await api.post('/shorten', {
          long_url: link
        })

        setData(response.data);
        setShowModal(true);
        saveLink('@linkcurto',response.data);
        setLink('')

      } catch {
        alert("The link is wrong!")
      }
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Sujeito Link Logo" />
        <h1>Short Link</h1>
        <span>Paste your link to shorten 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color='#fff' />
          <input
            placeholder='Paste your link here...'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button onClick={handleShortLink}>Shorten Link</button>

      </div>

      <Menu />
      {showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}
    </div>
  );
}

