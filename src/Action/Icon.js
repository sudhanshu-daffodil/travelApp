import React from 'react';
const resolveIcon = (Target, props = {}) => {
  return <Target.default {...props} />;
};
export {resolveIcon};
