'use client'

import { SessionProvider } from "next-auth/react";

export function AppProvider({children}) {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}


// Sesion provider component -> 
//Session mora da bude okruzena sa SessionProvider 
//componentom u glavnom Layoutu kako bi sesija bila aktivna na celoj aplikaciji. 
//Ali Session Provider hook je Client komponenta. 
//Da ne bi ceo glavni Layout bio Client onda se napravi ovakva komponenta 

//GLAVNI LAYOUT SE NA KRAJU OBAVIJE SESSION PROVIDER KOMPONENTOM