// route is equal to hash id
const resolveRouts = (route) => {
  if (route === '/') {
    return route;
  }
  if (route.length <= 3) {
    return '/:id';
  }
  return `${route}`;
};

export default resolveRouts;
