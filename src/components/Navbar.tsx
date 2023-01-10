import type { FC } from 'react';
import React from 'react';

interface INavbar {
    login: string
    name: string
    avatar: string
}

const Navbar: FC<INavbar> = ({
    name,
    avatar
}) => {

    return (
        <nav className="bg-sky-700">
            <ul className="flex">
                <li className="py-3 px-4 bg-sky-600 hover:bg-sky-500 active:bg-sky-500">
                    <a href="/admin" className="text-white block">Dashboard</a>
                </li>
                <li className="py-3 px-4 hover:bg-sky-600">
                    <a href="/admin/articles" className="text-white block">Articles</a>
                </li>
                <li className="py-3 px-4 hover:bg-sky-600">
                    <a href="/admin/users" className="text-white block">Users</a>
                </li>
                <li className="relative py-3 px-4 flex ml-auto group/item">
                    <img src={avatar} alt="avatar" className="w-7 rounded-2xl mr-2" />
                    <button className="text-white">
                        {name}
                        <ul className="absolute left-0 top-[52px] w-[100%] bg-sky-700 text-left hidden group/edit group-hover/item:block">
                            <li className="py-3 px-4 hover:bg-sky-600">
                                <a href="/admin/profile" className="text-white block">Profile</a>
                            </li>
                            <li className="py-3 px-4 hover:bg-sky-600">
                                <a href="/admin/logout" className="text-white block">Logout</a>
                            </li>
                        </ul>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
