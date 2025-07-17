/**
 * Finds matching touch patterns and returns an array of actions.
 *
 * @param {Object} zones     The zones object from context.
 * @param {number} fingers   Number of fingers detected.
 * @param {string} motion    Motion type detected.
 * @returns {string[]}       List of action strings to invoke.
 */
export function routeTouch(zones, fingers, motion) {
  const actions = [];

  Object.values(zones).forEach(zone => {
    zone.touchPatterns.forEach(pattern => {
      if (
        pattern.active &&
        pattern.fingers === fingers &&
        pattern.motion === motion
      ) {
        actions.push(...pattern.actions);
      }
    });
  });

  return actions;
}