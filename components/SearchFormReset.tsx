"use client";
import React from 'react'
import Link from 'next/link';
import { X } from 'lucide-react';


//this was coming from sanity which fetches the data
const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if (form) {
            form.reset();
        }
    }
    return (
        <div>
            <button type='reset' onClick={reset}>
                    <Link href="/" className="search-btn text-white">
                    <X className="size-5"/>
                    </Link>
            </button>
        </div>
    )
}

export default SearchFormReset
