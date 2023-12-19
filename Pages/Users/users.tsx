import axios from 'axios';
import { useEffect, useState} from "react";
import {InvoicesTableSkeleton} from "../../src/skeletons/skeletons.tsx";
import Pagination from "../../src/components/pagination.tsx";
import {useSearchParams} from "react-router-dom";
import {Button} from "@mui/material";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface User {
    firstName: string;
    id: string;
    lastName: string;
    picture: string;
    title: string;
}

const Users = () => {
    const [users, setUsers] = useState<User[] | null>([]);
    const [pages, setPages] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        setLoading(true);
        axios.get(`https://dummyapi.io/data/v1/user?page=${searchParams.get("page")}&limit=10`,
            {
                headers: {
                    'app-id': '65819b3d0ac3b956380cd4bc'
                }
            }).then((response) => {
            setUsers(JSON.parse(JSON.stringify(response.data.data)));
            setPages(response.data.total);
            setLoading(false);
        })
    }, [searchParams, setSearchParams]);

    const handleSortFirstNameClick = () => {
        setUsers((prevUsers) => {
            if (prevUsers) {
                prevUsers.sort((a, b) => {
                    if (a.firstName < b.firstName) {
                        return -1;
                    } else if (a.firstName > b.firstName) {
                        return 1;
                    } else {
                        return 0;
                    }
                });

                return prevUsers.slice();
            }

            return prevUsers; // Return null if users is initially null
        });

        handleClose();
    };

    const handleSortLastNameClick = () => {
        setUsers((prevUsers) => {
            if (prevUsers) {
                prevUsers.sort((a, b) => {
                    if (a.lastName < b.lastName) {
                        return -1;
                    } else if (a.lastName > b.lastName) {
                        return 1;
                    } else {
                        return 0;
                    }
                });

                return prevUsers.slice();
            }

            return prevUsers;
        });

        handleClose();
    };

    return !users || loading ? (<InvoicesTableSkeleton />) : (
        <div className="w-full">
            <div className="mt-6 flow-root">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
                            <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                                <tr>
                                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                        First Name
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Last Name
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        User Title
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        User Unique ID
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-gray-900">
                                {users?.map((customer) => (
                                    <tr key={customer.id} className="group text-left">
                                        <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={customer.picture}
                                                    className="rounded-full"
                                                    alt={`${customer.firstName}'s profile picture`}
                                                    width={28}
                                                    height={28}
                                                />
                                                <p>{customer.firstName}</p>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                            {customer.lastName}
                                        </td>
                                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                            {customer.title}
                                        </td>
                                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                            {customer.id}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {pages ? <Pagination totalPages={pages} set={setSearchParams} currentPage={searchParams.get('page') || '1'}/> : null }
            <Button onClick={handleMenu} variant={'outlined'}>Sort</Button>
            <Menu
                id="menu-sort"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleSortFirstNameClick}>First Name</MenuItem>
                <MenuItem onClick={handleSortLastNameClick}>Last Name</MenuItem>
            </Menu>
        </div>
    )
}
export default Users
