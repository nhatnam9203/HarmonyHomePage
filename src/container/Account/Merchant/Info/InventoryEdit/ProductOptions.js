import React from 'react'
import ReactTable from "react-table";
import Title from "@/components/Title";
import icon_add from "@/assets/images/retailer/icon_add.png";
import tick_active from "@/assets/images/retailer/tick_active.png";
import tick_inactive from "@/assets/images/retailer/tick_inactive.png";
import icon_trash from "@/assets/images/retailer/trash.png";
import CustomTableHeader from "../../Info/CustomTableHeader";
import "./style.scss";

const ProductOptions = ({
    options,
    openAddOption = () => { },
    deleteOption = () => { },
    tickValueOption = () => { },
}) => {
    return (
        <>
            <Title
                style={{
                    marginTop: "2.5rem",
                    marginBottom: "1.5rem",
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                Product Options
                <div onClick={openAddOption} className="btn_add_option"  >
                    <img src={icon_add} alt="imgh" />
                    <span>Add option</span>
                </div>
            </Title>
            {
                options.map(opt => (
                    <OptionItem
                        key={opt.id + 'option' + Math.random()}
                        item={opt}
                        deleteOption={deleteOption}
                        tickValueOption={tickValueOption}
                    />
                ))
            }
        </>
    )
}

const OptionItem = ({ item, deleteOption, tickValueOption }) => {
    return (
        <div className="optionItem">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h6>{item.label}</h6>
                <img
                    onClick={() => deleteOption(item.attributeId)}
                    src={icon_trash}
                    alt="delete"
                    style={{ width: 35, height: 35, cursor: 'pointer' }}
                />
            </div>
            <ReactTable
                className="table-inventoryDetail product-option-table"
                manual
                sortable={false}
                data={item.values || []}
                minRows={1}
                noDataText="NO DATA!"
                NoDataComponent={() => <div className="retailer_nodata">NO DATA!</div>}
                columns={item.inputType === "Visualswatch" ? columnVisualSwatch(tickValueOption) : columns(tickValueOption)}
                PaginationComponent={() => <div />}
            />
        </div>
    )
}

const columns = (tickValueOption) => [
    {
        Header: <CustomTableHeader value="Active" />,
        id: "tick",
        accessor: (row) =>
            <img alt="img" onClick={() => tickValueOption(row)} src={row.checked ? tick_active : tick_inactive}
                style={{ width: 22, height: 22, marginTop: 12, marginLeft: 10 }}
            />,
        width: 80,
    },
    {
        Header: <CustomTableHeader value="Value label" />,
        id: "label",
        accessor: (row) =>
            <input
                className="input_price"
                style={{ width: 350, marginLeft: 8 }}
                type="text"
                value={row.label}
                onChange={() => { }}
            />
    },
];

const columnVisualSwatch = (tickValueOption) => [
    {
        Header: <CustomTableHeader value="Active" />,
        id: "tick",
        accessor: (row) =>
            <img alt="img" onClick={() => tickValueOption(row)} src={row.checked ? tick_active : tick_inactive}
                style={{ width: 22, height: 22, marginTop: 12, marginLeft: 10 }}
            />,
        width: 80,
    },
    {
        Header: <CustomTableHeader value="Swatch" />,
        id: "swatch",
        accessor: (row) =>
            <div
                style={{
                    width: 42,
                    height: 42,
                    border: "1px solid #dddddd",
                    padding: '5px',
                    marginTop: 5,
                    marginLeft: 5
                }}
            >
                <div style={{ width: '100%', height: '100%', background: row?.value || '#ffffff' }} />
            </div>,
        width: 100
    },
    {
        Header: <CustomTableHeader value="Value label" />,
        id: "label",
        accessor: (row) =>
            <input
                className="input_price"
                style={{ width: 350, marginLeft: 8 }}
                type="text"
                value={row.label}
                onChange={() => { }}
            />
    },
];

export default ProductOptions;
