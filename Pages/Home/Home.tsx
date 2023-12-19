import { Link } from 'react-router-dom'
import {Button} from "@mui/material";
import {useCallback, useState} from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useNavigate} from "react-router-dom";

interface TermsProps {
    open: boolean;
    handleClose: () => void;
}
const Terms = ({open, handleClose} : TermsProps) => {

    return (
        <>
            <Dialog
                fullScreen={false}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Api Problem"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        There are currently CORS errors when posting a file to https://mvai.qa.onroadvantage.com/api/analyse.
                        Therefore, I did not do the upload part of this task.
                        I am more than willing to continue if we can get past the CORS errors.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Thank you!
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}


export default function Home() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClickOpen = useCallback(() => {
        setOpen(true);
    },[open]);

    const handleClose = useCallback(() => {
        setOpen(false);
    },[open]);


    const handleNavigate = useCallback(() => {
        navigate('/upload');
    },[navigate]);

    return (
        <section className="w-full h-[300px] m-auto ">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 items-center">
                    <div className="flex flex-col justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text ">
                                Revolutionize Your Upload Experience
                            </h1>
                            <p className="max-w-[600px] md:text-xl  mx-auto">
                                Start immediately.
                            </p>
                        </div>
                        <div className="w-full max-w-sm space-y-2 mx-auto">
                            <Button variant="contained" color="primary" onClick={handleNavigate}>Start</Button>
                            <p className="text-base py-3">
                                Get ready to redefine your upload experience.
                                <Link to={'#'} onClick={handleClickOpen} className="underline underline-offset-2 py-2 flex justify-center font-bold" >
                                    BUT FIRST Terms & Conditions
                                </Link>
                            </p>
                            <Terms open={open} handleClose={handleClose} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}