import { createRoot } from 'react-dom/client';
import React from "react";
const Scheduler = {
    renderScheduler: (container: string) => {
        alert('Scheduler is rendering 3');
        // createRoot(document.getElementById(container)!).render(
        //     <StylesProvider>
        //         <StoreProvider>
        //             <H1>Hello</H1>
        //         </StoreProvider>
        //     </StylesProvider>
        // );
    }
}

export default Scheduler;