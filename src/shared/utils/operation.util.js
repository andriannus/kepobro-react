export const loadSharedComponent = (component) => {
  return import(`shared/components/${component}`);
}
