import React from 'react';
import { DISCLAIMER_HEADING, DISCLAIMER_MSG } from '../utils/Constants';
export default function Footer() {
    return (
        <footer className="App-footer">
            <p className="text-sm md:text-base lg:text-sm leading-relaxed text-center">
                <strong>{DISCLAIMER_HEADING}:</strong> {DISCLAIMER_MSG}
            </p>
        </footer>
    );
}