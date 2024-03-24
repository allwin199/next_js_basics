import React from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

const page = () => {
    return (
        <main>
            <h1>Hello</h1>
            <Link href="/users">Users</Link>
            <ProductCard />
        </main>
    );
};

export default page;
