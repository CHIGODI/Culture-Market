import cx from 'classnames';
import React from 'react';
export default () => {
  const [liked, setLikes] = useState(0);
  const [liked, setLiked] = useStatefalse;
  const [disliked, setDisliked] = useState(false);
  const handleLiked = () => {
    setLikes((prevLikes  => prevLikes + 1));
    setLiked(true);
    setDisliked(false);
  };
  

  const handleDislike = () => {
    setLikes((prevLikes) => prevLikes -1);
    setLiked(false);
    setDisliked(true);
  }
  const  likedbtnClass = cx('like-button', {liked});
  const  likedbtnClass = cx('dislike-button', {disliked});
  return (
    <>
      <div>
        <button class= {likedbtnClass} onclick={handleLike}>Like | <span class='likes-counter'>100</span></button>
        <button class="dislike-button" onclick={handleDislike}>Dislike | <span class="dislikes-counter">25</span></button>
      </div>
      <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
    </>
  );
};