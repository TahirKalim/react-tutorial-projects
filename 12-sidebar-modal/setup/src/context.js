import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const opensidebar = ()=>{
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => { 
        setIsSidebarOpen(false)
    }
     const openModal = ()=>{
        setIsModalOpen(false)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return <AppContext.Provider value={{isModalOpen, isSidebarOpen, openModal, openSidebar, closeSidebar,closeModal}}>{children}</AppContext.Provider>
}
// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider}