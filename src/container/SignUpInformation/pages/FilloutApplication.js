import React from 'react';
import { Stepper } from 'react-form-stepper';

import "./index.scss";
const Generalnformation = React.lazy(() => import("../components/Generalnformation"));
const BusinessInformation = React.lazy(() => import("../components/BusinessInformation"));
const BankInformation = React.lazy(() => import("../components/BankInformation"));
const PrincipalInformation = React.lazy(() => import("../components/PrincipalInformation"));
const PackagePricing = React.lazy(() => import("../components/PackagePricing"));
const Success = React.lazy(() => import("../components/Success"));


export const FilloutApplication = () => {

    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepClick = (step) => {
        setActiveStep(step);
    }

    const renderByStep = () => {
        switch (activeStep) {
            case 0:
                return <Generalnformation />;
            case 1:
                return <BusinessInformation />;
            case 2:
                return <BankInformation />;
            case 3:
                return <PrincipalInformation />;
            case 4:
                return <PackagePricing />;
            case 5:
                return <Success />;

            default:
                return <Generalnformation />
        }
    }

    return (
        <div className='filloutApplication'>
            {
                activeStep !== 5 &&
                <Stepper
                    steps={[{ label: 'General Information' }, { label: 'Business Information' }, { label: 'Bank Information' }, { label: 'Principal Information' }, { label: 'Pricing Plan' }]}
                    activeStep={activeStep}
                    connectorStateColors={true}
                    connectorStyleConfig={{
                        activeColor: '#1366AE',
                        size: 1,
                    }}
                    styleConfig={{
                        activeBgColor: '#1366AE',
                        activeTextColor: 'white',
                        inactiveBgColor: '#DDDDDD',
                        completedBgColor: '#1366AE',
                        fontWeight: '600',
                    }}
                />}
            {renderByStep()}
        </div>
    )
}
