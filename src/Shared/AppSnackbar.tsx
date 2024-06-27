import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material"
import { SyntheticEvent, useCallback } from "react";

import { AppState } from "../store/index";
import { hideSnackbar } from "../core/sliceCore";
import { useDispatch } from "react-redux";

interface AppSnackbarProps {
    show?: boolean;
    message?: string;
    handleClose?: (event: Event | SyntheticEvent<any, Event>, reason?: SnackbarCloseReason | string) => void;
    action?: React.ReactNode;
    type?: 'success' | 'warning' | 'error' | 'info';
}

const AppSnackbar: React.JSXElementConstructor<AppSnackbarProps> = (props: AppSnackbarProps) => {
    const dispatch = useDispatch();
    const snackbarSettings = useSelector((state: AppState) => state.core.snackbar);

    const closeSnackbarHandler = useCallback(() => {
        dispatch(hideSnackbar({}));
    }, [dispatch])

    return <Snackbar
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        open={props.show !== undefined ? props.show : snackbarSettings.show}
        autoHideDuration={snackbarSettings.duration || 3000}
        onClose={closeSnackbarHandler}
    >
        <Alert
            onClose={closeSnackbarHandler}
            severity={snackbarSettings.type}
            variant="filled"
            sx={{ width: '100%' }}
        >
            {props.message || snackbarSettings.message}
        </Alert>
    </Snackbar>
}

export default AppSnackbar;
function useSelector(arg0: (state: AppState) => any) {
    throw new Error("Function not implemented.");
}

