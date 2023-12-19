import React, {useState} from "react";
import { Pagination } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Paginations = ({ totalPages, set, currentPage }: { totalPages: number, set: Function, currentPage: string }) => {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(Number(currentPage) || 1);
    const allPages = Math.ceil(totalPages / 10);

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        set(value)
        navigate('?page=' + value)
    };

    return (
        <div className="inline-flex py-2 mt-2 rounded-3xl">
            <Pagination count={allPages} color={"primary"} page={page} onChange={handleChange} />
        </div>
    );
}

export default Paginations;
