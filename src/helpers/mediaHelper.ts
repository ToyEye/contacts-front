const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1268),
  tablet: customMediaQuery(768),
};

export default media;
