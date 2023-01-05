import { CommentType } from '~/models/type';

export const getAllComments = () =>
  fetch('http://localhost:3000/annotations/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());

export const deleteComment = (id: number) =>
  fetch(`http://localhost:3000/annotations/${id}`, {
    method: 'DELETE',
  });

export const createComment = (comment: CommentType) =>
  fetch('http://localhost:3000/annotations', {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
