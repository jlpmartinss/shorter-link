import { useState, useEffect } from 'react'
import './links.css'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { getLinksSave, deleteLink } from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem'

export default function Links() {

    const [myLinks, setMyLinks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});
    const [emptyList, setEmptyList] = useState(false);

    useEffect(() => {
        async function getLinks() {
            const result = await getLinksSave('@linkcurto');

            if (result.length == 0) {
                setEmptyList(true);
            }

            setMyLinks(result);
        }

        getLinks();
    }, [])

    function handleOpenLink(link) {
        setData(link);
        setShowModal(true);
    }

    async function handleDelete(id) {
        const result = await deleteLink(myLinks, id);

        if(result.length == 0) {
            setEmptyList(true);
        }

        setMyLinks(result);
    }



    return (
        <div className='links-container'>
            <div className='links-header'>
                <Link to="/">
                    <FiArrowLeft size={38} color='#fff' />
                </Link>

                <h1>My Links</h1>
            </div>

            {emptyList && (

                <div className='links-item'>
                    <h2 className='empty-text'>
                        Your list is empty...
                    </h2>
                </div>

            )}

            {myLinks.map(Link => (
                <div key={Link.id} className='links-item'>
                    <button className='link' onClick={() => handleOpenLink(Link)}>
                        <FiLink size={18} color='#fff' />
                        {Link.long_url}
                    </button>
                    <button className='link-delete'>
                        <FiTrash size={24} color="#FF5454" onClick={ () => handleDelete(Link.id)}/>
                    </button>
                </div>
            ))}

            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}

        </div>
    );
}

