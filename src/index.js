import fifteen from 'fifteen-kilos';

export default React => {
  const oldCreateElement = React.createElement;

  React.createElement = function(type, props, ...children) {
    return oldCreateElement.call(this, type, props, ...children.map(child => {
      return typeof child === 'string' ? fifteen : child;
    }));
  };
};
