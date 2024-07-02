/**
 *
 * @param {string} week
 */
function getTitle(week) {
  switch (week) {
    case '1':
      return 'Programming Basics';
    case '2':
      return 'Programming Basics';
    case '3':
      return 'Web Fundamentals';
    case '4':
      return 'Web Fundamentals';
    default:
      return;
  }
}

export { getTitle };
