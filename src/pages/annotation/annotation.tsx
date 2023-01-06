import React, { useEffect, useState } from 'react';
import {
  CommentControllerParameterType,
  CommentType,
  CoordinatesType,
  getAllComments,
} from '~/models';
import { createCoordinatesForComment } from '~/utils';
import image from '../../../public/9b1430a8b8d193f30d16e14522d50b55 1.png';
import { Comment } from './components/comment';
import css from './annotation.module.scss';
export const Annotation = () => {
  const [coordinates, setCoordinates] = useState<CoordinatesType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);

  const addComment = ({ comment }: CommentControllerParameterType) => {
    if (comments && comment) {
      setComments([...comments, comment]);
    }
  };

  const removeComment = ({ id: removedID }: CommentControllerParameterType) => {
    setComments(comments.filter(({ id }) => id !== removedID));
  };

  const handleClick = ({ pageY, pageX }: React.MouseEvent<HTMLDivElement>) => {
    setCoordinates(createCoordinatesForComment(pageX, pageY));
  };

  useEffect(() => {
    getAllComments().then((data) => setComments(data));
  }, []);

  return (
    <>
      <div className={css.background}>
        <img
          onClick={(event) => handleClick(event)}
          className={css.image}
          src={image}
          alt="Image"
        />
      </div>
      <Comment
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        commentController={addComment}
        index={comments.length + 1}
      />
      {!!comments?.length &&
        comments.map(({ x, y, value, id }, index) => (
          <Comment
            key={id}
            coordinates={{ x, y }}
            value={value}
            id={id}
            commentController={removeComment}
            index={index + 1}
          />
        ))}
    </>
  );
};
