import React, { useEffect, useState } from 'react'
import Posts from './Posts';
import { IFetchArticles } from '../../state/ducks/rest/types';
import Pagination from './Pagination';

interface Props {
  fetchArticlesAsync: () => void;
  posts: IFetchArticles | [];
}
const RestPlayGround: React.FC<Props> = (props: Props) => {
  const { posts, fetchArticlesAsync } = props

  useEffect(() => { fetchArticlesAsync() }, [])

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <>
      <Posts posts={currentPosts} isLoading={false} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  )
}

export default RestPlayGround
