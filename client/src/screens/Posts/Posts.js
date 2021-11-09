import Layout from '../../components/Layout/Layout.jsx'
import { useState, useEffect } from 'react'
import { getPosts } from '../../services/posts.js'
import './Posts.css'
import Post from '../../components/Post/Post'

// import PostsData from '../../components/Post/Post'
import Search from '../../components/Search/Search'
// import Sort from '../../components/Sort/Sort'
// // import { AZ, ZA } from '../../utils/sort'


// export post component to render it on screen

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('title-ascending')

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
      setSearchResult(allPosts)
      console.log(posts)
      console.log(allPosts)
    }
    fetchPosts();
  }, [])
  
  // const handleSort = (type) => {
  //   if (type !== '' && type !== undefined) {
  //     setSortType(type)
  //   }
  //   switch (type) {
  //     case 'title-ascending':
  //       setSearchResult(AZ(searchResult))
  //       break
  //     case 'title-descending':
  //       setSearchResult(ZA(searchResult))
  //       break
  //     default:
  //       break
  //   }
  // }

  // if (applySort) {
  //   handleSort(sortType)
  //   setApplySort(false)
  // }

  const handleSearch = (event) => {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSearchResult(results)
    setApplySort(true)
  }

  const handleSubmit = (event) => event.preventDefault()

  return (
    <Layout>
		  <div>
			  <h1>Test Posts.js</h1>
      </div>
      
      {/* <Sort onSubmit={handleSubmit} handleSort={handleSort} /> */}
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <div className='posts'>
        {searchResult.map((post, index) => {
          return (
            <Post
              _id={post._id}
              title={post.title}
              imgURL={post.imgURL}
              review={post.review}
              publisher={post.publisher}
              key={index}
            />
          )
        })}
      </div>
      
    </Layout>
	)
}

export default Posts