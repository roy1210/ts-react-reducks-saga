import React from 'react'
import { IFetchArticles } from '../../state/ducks/rest/types';

interface Props {
  posts: IFetchArticles,
  isLoading: any;
}

const Posts: React.FC<Props> = (props: Props) => {
  const { posts, isLoading } = props

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts
