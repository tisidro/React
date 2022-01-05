import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [value, setValue] = useState('Original Value')

  const buttonClick = () => {
    setValue('New Value')
  }

  const [blogs, setBlogs] = useState([
    {
      title: 'First Blog Entry',
      body: 'lorem ipsum...',
      author: 'terri',
      id: 1
    },
    { title: 'Another Entry', body: 'lorem ipsum...', author: 'tina', id: 2 },
    {
      title: 'Yet another entry...',
      body: 'lorem ipsum...',
      author: 'tina',
      id: 3
    }
  ])

  const handleDelete = id => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id) //if blog id doesn't match it is NOT filtered out and stays
    setBlogs(updatedBlogs) //updates the state to the new, filtered collection of blogs
  }

  return (
    <div className='home'>
      <BlogList
        blogs={blogs}
        title='All Blog Posts'
        handleDelete={handleDelete}
      />
      {/* passing blogs props from Home parent component to BlogList component, also handleDelete props for deleting posts */}
      <BlogList
        blogs={blogs.filter(blog => blog.author === 'tina')}
        title="Tina's Blogs"
        handleDelete={handleDelete} //in order for the delete button to work on filtered section, you need to pass this prop here too
      />
      {/* created a new title and used filter method so we can post blogs in sections by author */}

      <button onClick={buttonClick}>Click to update value</button>
      <p>{value}</p>
      {/* to add an input, wrap in anonymous function so it does not just post the name */}
    </div>
  )
}

export default Home
