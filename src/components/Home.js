import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='get-started container'>

            <h1>Welcome to <span>Home+</span></h1>
            <p>Keeping track of your daily tasks has never been easier.</p>

            <div className='container'>
                <div className='image-home'></div>
                    <div className='container'>
                    <Link to='/login' ><button className='btn'>Log in</button></Link>
                    <Link to='/signup' ><button className='btn btn-green'>Sign up</button></Link>
                    </div>
                    <br/>
            </div>
        </div>
    )
}

export default Home
