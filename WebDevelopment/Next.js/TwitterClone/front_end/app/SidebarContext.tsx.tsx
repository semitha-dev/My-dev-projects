'use client'

import React, { createContext, useState, useContext } from 'react';

interface SidebarContextType {
    sideBarName: string;
    setSideBarName: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sideBarName, setSideBarName] = useState('');

    return (
        <SidebarContext.Provider value={{ sideBarName, setSideBarName }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) throw new Error('useSidebar must be used within a SidebarProvider');
    return context;
};
