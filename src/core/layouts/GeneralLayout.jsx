import React from 'react'
import "./generalLayout.css"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import LanguageProvider from '../../providers/LanguageProvider'


const GeneralLayout = ({ children }) => {
    return (
        <div>
            <LanguageProvider>
                <Navbar />
                {children}
                <Footer />
            </LanguageProvider>


        </div>
    )
}

export default GeneralLayout