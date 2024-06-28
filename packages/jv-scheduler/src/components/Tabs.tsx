import React, {useState} from "react";

const Tabs = () => {
    const [showtext, setShowtext] = useState(false);
    // @ts-ignore
    return showtext ? (<h1>Hi</h1>) : (<h1>Bye</h1>) ;
}
export default Tabs;