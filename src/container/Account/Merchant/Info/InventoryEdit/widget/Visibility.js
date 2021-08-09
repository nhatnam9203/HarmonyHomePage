import React, { Component } from 'react';
import OptionSelect from "./OptionSelect";

const PRODUCT_VISIBLE_TYPE = [
    { label: "Web & App", value: "webApp" },
    { label: "App", value: "app" },
    { label: "Web", value: "web" },
];

export default class Visibility extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.refSelect = React.createRef();
    }

    selectOption = (value) => {
        this.props.onChange(value);
    }

    getValue = (value) => {
        let valueSelected = "";
        let objFind = PRODUCT_VISIBLE_TYPE.find(obj => obj.value === value);
        if (objFind) {
            valueSelected = objFind.label;
        }
        return valueSelected;
    }

    render() {

        const { visibility } = this.props;

        return (
            <div style={{ width: '100%' }} className="optionItem">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h6>{'Visibility'}</h6>
                </div>

                <OptionSelect
                    value={this.getValue(visibility)}
                    data={PRODUCT_VISIBLE_TYPE}
                    selectOption={this.selectOption}
                />
            </div>
        )
    }
}
