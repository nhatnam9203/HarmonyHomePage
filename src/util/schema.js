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