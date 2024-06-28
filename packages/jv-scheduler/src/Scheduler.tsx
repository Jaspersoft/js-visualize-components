import Tabs from './components/Tabs';
import React from "react";
import ReactDOM from "react-dom/client";
const Scheduler = {
    renderScheduler: (container: string) => {
        const root = ReactDOM.createRoot(
            document.getElementById('root') as HTMLElement
        );
// @ts-ignore
        root.render(<Tabs />);
    }
}

export default Scheduler;