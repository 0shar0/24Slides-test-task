import { CoordinatesType } from '~/models';

const HALF_INPUT_WIDTH = 180;
const TRIANGLE_HEIGHT = 30;
const INDEX_RADIUS = 15;

export const createCoordinatesForComment = (pageX: number, pageY: number): CoordinatesType => ({
  y: pageY / window.innerHeight,
  x: pageX / window.innerWidth,
});

export const getCommentPosition = ({ y, x }: CoordinatesType) => ({
  top: y * window.innerHeight + TRIANGLE_HEIGHT,
  left: x * window.innerWidth - HALF_INPUT_WIDTH,
});

export const getIndexPosition = ({ y, x }: CoordinatesType) => ({
  top: y * window.innerHeight - INDEX_RADIUS,
  left: x * window.innerWidth - INDEX_RADIUS,
});
