import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'terri', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'tina', id: 2 },
        { title: 'Web dev tips', body: 'lorem ipsum...', author: 'tina', id: 3 }

    ]);

    return (

        <div className="home">
            <BlogList blogs={blogs} title="All The Blogs" />

        </div>
    );
}

export default Home;