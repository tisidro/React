

const BlogList = ({ blogs, title }) => {

    //const blogs = props.blogs;
    //const title = props.title; instead of these I just reference the object properties as parameters as above

    return (
        <div className="blog-list">

            <h2>{title}</h2>

            {blogs.map((blog) => (

                <div className="blog_preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by: {blog.author}</p>
                </div>
            ))}
        </div>

    );
}

export default BlogList;