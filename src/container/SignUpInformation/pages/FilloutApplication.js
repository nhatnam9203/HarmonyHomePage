import React from 'react';
import { Stepper } from 'react-form-stepper';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {
    signUpGeneralInfoSchema,
    signUpGeneralInfoSchema2,
    signUpBankInformation,
    signUpPrincipalInfoSchema
} from "@/util/schema";
import Loading from "@/components/Loading";
import axios from "@/helper/axios";
import { useMediaQuery } from 'react-responsive'

import "./index.scss";
const Generalnformation = React.lazy(() => import("../components/Generalnformation"));
const BusinessInformation = React.lazy(() => import("../components/BusinessInformation"));
const BankInformation = React.lazy(() => import("../components/BankInformation"));
const PrincipalInformation = React.lazy(() => import("../components/PrincipalInformation"));
const PackagePricing = React.lazy(() => import("../components/PackagePricing"));
const Success = React.lazy(() => import("../components/Success"));

const endPoint = process.env.REACT_APP_API_ENDPOINT;


const initialPrincipalValues = {
    firstName: "",
    lastName: "",
    position: "",
    ownership: "",
    homePhone: "",
    mobilePhone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    yearAtThisAddress: "",
    ssn: "",
    dateOfBirth: new Date(),
    email: "",
    driverLicense: "",
    stateIssued: "",
    fileId: null,
};


export const FilloutApplication = () => {


    React.useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);


    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })


    const form_0 = useForm({});
    const errors_0 = form_0.formState.errors;


    const form_2 = useForm({
        resolver: yupResolver(signUpBankInformation)
    });
    const errors_2 = form_2.formState.errors;

    const form_4 = useForm({
        defaultValues: {
            principalInfor: [initialPrincipalValues],
        },
        resolver: yupResolver(signUpPrincipalInfoSchema)
    });
    const errors_4 = form_4.formState.errors;

    const [activeStep, setActiveStep] = React.useState(3);

    const [generalInfo, setGeneralInfor] = React.useState({});
    const [businessInfo, setBusinessInfor] = React.useState({});
    const [bankInfo, setBankInfor] = React.useState({});
    const [principalInfo, setPrincipalInfo] = React.useState({});
    const [packagePricing, setPackagePricing] = React.useState(1);

    const [isSuccess, setIsSuccess] = React.useState(false);

    const [isLoading, setLoading] = React.useState(false);

    const handleStepClick = (step) => {
        setActiveStep(step);
    }

    const updateValues = async (type, values) => {
        switch (type) {
            case "generalInfor":
                setGeneralInfor(values);
                setActiveStep(1);
                break;

            case "businessInfo":
                setBusinessInfor(values);
                setActiveStep(2);
                break;

            case "bankInfo":
                setBankInfor(values);
                setActiveStep(3);
                break;

            case "prinicipalInfo":
                setPrincipalInfo(values);
                setActiveStep(4);
                break;

            case "packagePricing":
                setPackagePricing(values);
                const packge_id = values;
                submitSignupMerchant(packge_id);
                break;

            case "success":
                setIsSuccess(true);
                setActiveStep(5);
                break;

            default:
                break;
        }
    }

    const submitSignupMerchant = async (packge_id) => {

        const data = {
            generalInfo,
            businessInfo,
            bankInfo,
            principalInfo,
            packagePricing: packge_id,
            type : generalInfo?.type
        };

        const addMerchantUrl = `${endPoint}/merchant?api-version=1.1`;
        try {
            setLoading(true);
            const response = await axios.post(
                `${addMerchantUrl}`,
                { ...data },
            );

            if (response?.data?.codeNumber == 200) {
                setIsSuccess(true);
                updateValues("success");
            } else {
                console.log({ response });
            }
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    }

    const goBack = () => {
        setActiveStep(activeStep - 1);
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
                return <BusinessInformation handleStepClick={handleStepClick} updateValues={updateValues} goBack={goBack} />;
            case 2:
                return <BankInformation handleStepClick={handleStepClick} updateValues={updateValues} form={form_2} errors={errors_2} goBack={goBack} />;
            case 3:
                return <PrincipalInformation handleStepClick={handleStepClick} updateValues={updateValues} goBack={goBack} form={form_4} errors={errors_4} />;
            case 4:
                return <PackagePricing handleStepClick={handleStepClick} updateValues={updateValues} goBack={goBack} />;
            case 5:
                return <Success handleStepClick={handleStepClick} updateValues={updateValues} goBack={goBack} />;

            default:
                return <BusinessInformation handleStepClick={handleStepClick} updateValues={updateValues} goBack={goBack} />;
        }
    }

    const lblData = isMobile ? [{ label: '' }, { label: '' }, { label: '' }, { label: '' }, { label: '' }] :
        [{ label: 'General Information' }, { label: 'Business Information' }, { label: 'Bank Information' }, { label: 'Principal Information' }, { label: 'Pricing Plan' }]

    return (
        <>
            <div className='filloutApplication'>
                {
                    !isSuccess &&
                    <Stepper
                        steps={lblData}
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
                {isLoading && <Loading isFullLoading={true} />}
            </div>
        </>
    )
}
