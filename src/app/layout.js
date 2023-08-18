import './globals.css'
import { Inter } from 'next/font/google'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-black min-h-screen w-full text-white'>
          <ToastContainer />
          {children}
        </div>
      </body>
    </html>
  )
}
