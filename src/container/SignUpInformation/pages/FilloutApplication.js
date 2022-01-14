import React from 'react';
import { Stepper } from 'react-form-stepper';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {
    signUpGeneralInfoSchema,
    signUpGeneralInfoSchema2,
} from "@/util/schema";

import "./index.scss";
const Generalnformation = React.lazy(() => import("../components/Generalnformation"));
const BusinessInformation = React.lazy(() => import("../components/BusinessInformation"));
const BankInformation = React.lazy(() => import("../components/BankInformation"));
const PrincipalInformation = React.lazy(() => import("../components/PrincipalInformation"));
const PackagePricing = React.lazy(() => import("../components/PackagePricing"));
const Success = React.lazy(() => import("../components/Success"));


export const FilloutApplication = () => {

    const form_0 = useForm({});
    const errors_0 = form_0.formState.errors;

    const [activeStep, setActiveStep] = React.useState(0);

    const [generalInfor, setGeneralInfor] = React.useState({});
    const [businessInfor, setBusinessInfor] = React.useState({});
    const [bankInfor, setBankInfor] = React.useState({});

    const handleStepClick = (step) => {
        setActiveStep(step);
    }

    const updateValues = async (type, values) => {
        switch (type) {
            case "generalInfor":
                setGeneralInfor(values);
                setActiveStep(1);
                break;

            case "businessInfor":
                setBusinessInfor(values);
                setActiveStep(2);
                break;

            case "bankInfor":
                setBankInfor(values);
                setActiveStep(3);
                break;
            default:
                break;
        }
    }

    const renderByStep = () => {
        switch (activeStep) {
            case 0:
                return <Generalnformation
                    handleStepClick={handleStepClick}
                    form={form_0}
                    errors={errors_0}
                    signUpGeneralInfoSchema={signUpGeneralInfoSchema}
                    signUpGeneralInfoSchema2={signUpGeneralInfoSchema2}
                    updateValues={updateValues}
                />;
            case 1:
                return <BusinessInformation handleStepClick={handleStepClick} />;
            case 2:
                return <BankInformation handleStepClick={handleStepClick} />;
            case 3:
                return <PrincipalInformation handleStepClick={handleStepClick} />;
            case 4:
                return <PackagePricing handleStepClick={handleStepClick} />;
            case 5:
                return <Success handleStepClick={handleStepClick} />;

            default:
                return <Generalnformation handleStepClick={handleStepClick} />
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
