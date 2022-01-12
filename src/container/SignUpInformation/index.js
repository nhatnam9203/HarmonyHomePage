import React from 'react'
import { TermCondition, FilloutApplication } from "./pages"

const Index = () => {

    const [isAgree, setIsAgree] = React.useState(false);
    const [isAcceptAgree, setIsAcceptAgree] = React.useState(true);

    if (isAcceptAgree) {
        return (
            <FilloutApplication />
        );
    } else {
        return (
            <TermCondition
                isAgree={isAgree}
                setIsAgree={setIsAgree}
                setIsAcceptAgree={setIsAcceptAgree}
            />
        );
    }
};

export default Index;

