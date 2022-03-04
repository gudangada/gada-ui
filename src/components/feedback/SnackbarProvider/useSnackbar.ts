import { useSnackbar as useSnackbarHook } from "notistack";

const useSnackbar = () => {
  const snackbarOptions = useSnackbarHook();

  return snackbarOptions;
};

export default useSnackbar;
