import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { Stepper } from 'react-form-stepper';

import "./index.scss";
const Generalnformation = React.lazy(() => import("../components/Generalnformation"));


export const FilloutApplication = () => {

    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <div className='filloutApplication'>
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
            />
            <Switch>
                <Route exact path="/home/sign-up-information" component={Generalnformation} />
            </Switch>
        </div>
    )
}
