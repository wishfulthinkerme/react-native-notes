export const toggleComponent = shouldReturnComponent =>
  WrappedComponent => {
    if (!shouldReturnComponent) {
      return null;
    }

    return WrappedComponent;
  };

export default toggleComponent;
