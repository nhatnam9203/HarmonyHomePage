import * as yup from "yup";

const checkStateValid = (stateCity, value) => {
    let check = false;
    for (let i = 0; i < stateCity.length; i++) {
        if (stateCity[i].name.includes(value)) {
            check = true;
            return true;
        }
    }
    return check;
}

export const signUpGeneralInfoSchema = (stateCity) => yup.object().shape({
    businessName: yup.string().required("required"),
    doingBusiness: yup.string().required("required"),
    tax: yup.string().required("required"),
    businessPhone: yup.string().required("required"),
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    position: yup.string().required("required"),
    contactPhone: yup.string().required("required"),

    streetBusinessAddress: yup.string().required("required"),
    cityBusinessAddress: yup.string().required("required"),
    zipBusinessAddress: yup.string().required("required"),
    stateBusinessAddress: yup.string()
        .required("required").test("state-isValid", "State invalid",
            function (value) {
                return checkStateValid(stateCity, value)
            })
        .nullable(),

    streetDbaAddress: yup.string().required("required"),
    cityDbaAddress: yup.string().required("required"),
    zipDbaAddress: yup.string().required("required"),

    stateDbaAddress: yup.string()
        .required("required").test("state-isValid", "State invalid",
            function (value) {
                return checkStateValid(stateCity, value)
            })
        .nullable(),

    email: yup.string().required("required").email("Invalid email"),
});

export const signUpGeneralInfoSchema2 = (stateCity) => {
    return yup.object().shape({
        businessName: yup.string().required("required"),
        doingBusiness: yup.string().required("required"),
        tax: yup.string().required("required"),
        businessPhone: yup.string().required("required"),
        firstName: yup.string().required("required"),
        lastName: yup.string().required("required"),
        position: yup.string().required("required"),
        contactPhone: yup.string().required("required"),

        streetBusinessAddress: yup.string().required("required"),
        cityBusinessAddress: yup.string().required("required"),
        zipBusinessAddress: yup.string().required("required"),
        stateBusinessAddress: yup.string()
            .required("required").test("state-isValid", "State invalid",
                function (value) {
                    return checkStateValid(stateCity, value)
                })
            .nullable(),

        email: yup.string().required("required").email("Invalid email"),
    });
};

export const signUpBankInformation = yup.object().shape({
    accountHolderName: yup.string().required("required"),
    bankName: yup.string().required("required"),
    accountNumber: yup.string().required("required"),
    routingNumber: yup.string().required("required"),
    fileId: yup.string().required("required"),
});

export const signUpPrincipalInfoSchema = yup.object().shape({
    principalInfor: yup.array().of(
        yup.object().shape({
            ownership: yup.string().required("required"),
            // homePhone: yup.string().required("required"),
            mobilePhone: yup.string().required("required"),
            firstName: yup.string().required("required"),
            lastName: yup.string().required("required"),
            position: yup.string().required("required"),

            address: yup.string().required("required"),
            city: yup.string().required("required"),
            state: yup.string()
                .required("required"),
            zip: yup.string().required("required"),

            email: yup.string().required("required").email("email is invalid"),
            stateIssued: yup.string()
                .required("required"),
            yearAtThisAddress: yup.string().required("required"),

            driverLicense: yup.string().required("required"),
            ssn: yup.string().required("required"),
            fileId: yup.string().required("required"),
        })
    ),
});

