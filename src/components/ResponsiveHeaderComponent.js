import React from 'react';
import useWindowSize from './useWindowSize';

const MobileHeader = () => (
    <header className="mobile-header relative w-full">
        <div className="header-overlay absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        </div>
    </header>
);

const LaptopHeader = () => (
    <header className="laptop-header relative w-full ">
        <div className="header-overlay absolute inset-0 bg-black bg-opacity-100 flex flex-col justify-center items-center">
        </div>
    </header>
);

const ResponsiveHeader = () => {
    const size = useWindowSize();

    return size.width < 768 ? <MobileHeader /> : <LaptopHeader />;
};

export default ResponsiveHeader;