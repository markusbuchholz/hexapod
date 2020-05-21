const INITIAL_DIMENSIONS = {
  front: 100,
  side: 100,
  middle: 100,
  coxia: 100,
  femur: 100,
  tibia: 100,
}

const INITIAL_POSE = {
  leftFront: { alpha: 0, beta: 0, gamma: 0 },
  rightFront: { alpha: 0, beta: 0, gamma: 0 },
  leftMiddle: { alpha: 0, beta: 0, gamma: 0 },
  rightMiddle: { alpha: 0, beta: 0, gamma: 0 },
  leftBack: { alpha: 0, beta: 0, gamma: 0 },
  rightBack: { alpha: 0, beta: 0, gamma: 0 },
}

const INITIAL_IK_PARAMS = {
  tx: 0,
  ty: 0,
  tz: 0,
  rx: 0,
  ry: 0,
  rz: 0,
  hipStance: 0,
  legStance: 0,
}

export { INITIAL_DIMENSIONS, INITIAL_POSE, INITIAL_IK_PARAMS }
