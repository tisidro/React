import { useState } from 'react';

const Home = () => {

    const [blogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'terri', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'tina', id: 2 },
        { title: 'Web dev tips', body: 'lorem ipsum...', author: 'tina', id: 3 }

    ]);

    return (

        <div className="home">
            {blogs.map((blog) => (
                <div className="blog_preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by: {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;