import './error.css';
import {Link} from 'react-router-dom'


export default function Error(){
    return(
        <div className='container-error'>
            <img src="notfound.png" alt='Pagina não encontrada'/>
            <h1>Page not Found!</h1>
            <Link to="/">
                Back to Home
            </Link>
        </div>
    )

}