import React, { useEffect } from 'react'
import Posts from './Posts';
import { IFetchArticles } from '../../state/ducks/rest/types';

interface Props {
  fetchArticlesAsync: () => void;
  posts: IFetchArticles | [];
}
const RestPlayGround: React.FC<Props> = (props: Props) => {
  useEffect(() => { props.fetchArticlesAsync() }, [])

  return (
    <div>
      <Posts posts={props.posts} isLoading={false} />
    </div>
  )
}

export default RestPlayGround
