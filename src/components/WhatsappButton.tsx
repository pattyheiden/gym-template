'use client'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { useState } from 'react';
import Loading from '@/app/loading';


export function WhatsappButton() {
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 1000);
    return (
        <>
            {
                isLoading ? <Loading /> : (
                    <>
                        <div className='absolute'>
                            <FloatingWhatsApp
                                accountName='UX MULTIFIT'
                                phoneNumber='5547996718719'
                                chatMessage='Olá caro cliente, como podemos ajudá-lo?'
                                statusMessage='Responde dentro de 1 hora'
                                placeholder='Escrever mensagem'
                                avatar='/whatsapp-logo.png'
                                darkMode
                            />
                        </div></>
                )
            }</>

    )
}