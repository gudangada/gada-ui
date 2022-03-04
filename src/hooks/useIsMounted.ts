import * as React from "react";

export const useIsMounted = () => {
  const [isMounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return isMounted;
};

export default useIsMounted;
