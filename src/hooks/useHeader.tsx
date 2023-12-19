import * as React from "react";
import {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";

export const useHeader = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNavigate = useCallback((route: string) => {
        navigate(route);
        handleClose();
    }, [navigate])

    const handleClose = () => {
        setAnchorEl(null);
    };

    return {
        anchorEl,
        handleMenu,
        handleClose,
        handleNavigate
    }

}