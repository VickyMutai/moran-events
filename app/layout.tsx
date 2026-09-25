import type { Metadata } from 'next';
import './globals.css';
const title='Moran Events | Beautifully planned. Unforgettably celebrated.';
const description='Thoughtful tentage, furniture, décor and event management for weddings, traditional ceremonies, corporate functions and celebrations in Kenya.';
export const metadata: Metadata = {metadataBase:new URL('https://moran-events.cherotichmutaiv.chatgpt.site'),title,description,icons:{icon:'/images/moran-logo.png'},openGraph:{title,description,type:'website',images:[{url:'/og.png',alt:'Moran Events — Beautifully planned. Unforgettably celebrated.'}]},twitter:{card:'summary_large_image',title,description,images:['/og.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-KE"><body>{children}</body></html>}
