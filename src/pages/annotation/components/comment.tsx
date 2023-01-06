import React, { useEffect } from 'react';
import {
  CommentControllerParameterType,
  CommentType,
  CoordinatesType,
  createComment,
  deleteComment,
} from '~/models';
import { getCommentPosition, getIndexPosition } from '~/utils';
import bin from '../../../../public/bin-icon.png';
import send from '../../../../public/send-icon.png';
import css from './comment.module.scss';

interface CommentPropsInterface {
  id?: number;
  value?: string;
  index: number;
  coordinates: CoordinatesType | null;
  setCoordinates?: (coordinates: CoordinatesType | null) => void;
  commentController: (parameter: CommentControllerParameterType) => void;
}

export const Comment = ({
  id,
  coordinates,
  setCoordinates,
  value,
  commentController,
  index,
}: CommentPropsInterface) => {
  const inputRef = React.createRef<HTMLInputElement>();

  const handleClose = () => {
    if (inputRef.current && setCoordinates) {
      inputRef.current.value = '';
      setCoordinates(null);
    }
  };

  const handleSend = () => {
    if (inputRef.current?.value) {
      createComment({ value: inputRef.current.value, ...coordinates } as CommentType)
        .then((comment) => commentController({ comment }))
        .then(handleClose);
    }
  };

  const handleRemove = () => {
    if (id) {
      deleteComment(id).then(() => commentController({ id }));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSend();
    }
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (inputRef.current && !inputRef.current.disabled) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    coordinates && (
      <>
        <div className={css.index} style={getIndexPosition(coordinates)}>
          {index}
        </div>
        <div className={css.wrapper} style={getCommentPosition(coordinates)}>
          <input
            type="text"
            value={value}
            ref={inputRef}
            disabled={!!value}
            placeholder="Leave a comment"
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <div className={css.line}></div>
          <div className={css.control}>
            {!value ? (
              <img src={send} alt="send" onClick={handleSend} />
            ) : (
              <img src={bin} alt="bin" onClick={handleRemove} />
            )}
          </div>
        </div>
      </>
    )
  );
};
