import dedent from 'dedent';

export const shadow = (position: 'to-top' | 'to-bottom') => {
  const multiplier = position === 'to-top' ? 1 : -1;
  return dedent`0px ${multiplier * 1.9}px 5.4px rgba(0, 0, 0, 0.066),
      0px ${multiplier * 4.9}px 13.6px rgba(0, 0, 0, 0.098),
      0px ${multiplier * 9.9}px 27.6px rgba(0, 0, 0, 0.127),
      0px ${multiplier * 20.4}px 56.9px rgba(0, 0, 0, 0.163),
      0px ${multiplier * 56}px 156px rgba(0, 0, 0, 0.24)`;
};
