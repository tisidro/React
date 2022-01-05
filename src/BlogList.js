const BlogList = ({ blogs, title, handleDelete }) => {
  //const blogs = props.blogs
  //const title = props.title instead of these I just destructured properties I want from the props,can do it either way
  //it's also taking handleDelete as a prop (that is from the Home parent component)
  return (
    <div className='blog-list'>
      <h2>{title}</h2>

      {blogs.map(blog => (
        //key attribute is unique identifier for each item in array
        <div className='blog-preview' key={blog.id}>
          {/* //dynamically generate title/author for each post */}
          <h2>{blog.title}</h2>
          <p>written by: {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}> delete post</button>
          {/* delete function is defined on home page where state is set */}
        </div>
      ))}
    </div>
  )
}

export default BlogList
