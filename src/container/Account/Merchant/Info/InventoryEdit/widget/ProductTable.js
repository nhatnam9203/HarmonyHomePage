import React from 'react'
import ReactTable from "react-table";
import Title from "@/components/Title";
import CustomTableHeader from "../../CustomTableHeader";
import product_default from "@/assets/images/product_default.png";
import icon_upload from "@/assets/images/retailer/icon_upload.png";
import icon_trash from "@/assets/images/retailer/trash.png";
import Dropzone from "react-dropzone";
import InputPrice from "./InputPrice";
import InputQuantity from "./InputQuantity";
import "../style.scss";

const ProductTable = ({
    quantities = [],
    uploadImagesOption = () => { },
    handleChangeInput = () => { },
    deleteQuantities = () => { },
}) => {

    return (
        <>
            <Title
                style={{
                    borderBottomWidth: 0,
                    marginTop: "2.5rem",
                    marginBottom: "0.5rem",
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                Product Versions
            </Title>
            <ReactTable
                className="table-inventoryDetail product-table"
                manual
                sortable={false}
                data={quantities || []}
                minRows={1}
                noDataText="NO DATA!"
                NoDataComponent={() => <div className="retailer_nodata">NO DATA!</div>}
                columns={columns(uploadImagesOption, handleChangeInput, deleteQuantities)}
                getTdProps={(state, rowInfo, column) => ({
                    style: {
                        height: '120px',
                    },
                })}
                PaginationComponent={() => <div />}
            />
        </>
    )
}

export default ProductTable;


const columns = (uploadImagesOption, handleChangeInput, deleteQuantities) => [
    {
        Header: <CustomTableHeader value="Versions" />,
        id: "label",
        accessor: (row) => <div className="table-tr row-label">{row.label}</div>,
        style: { 'whiteSpace': 'unset'},
        width: 260,
    },
    {
        Header: <CustomTableHeader value="&nbsp;" />,
        id: "no-comment",
        accessor: (row) => (
            <div />
        ),
        width: 40
    },
    {
        Header: <CustomTableHeader value="Description" />,
        id: "description",
        accessor: (row) => (
            <input
                className="input_price"
                value={row.description}
                onChange={(e) => handleChangeInput(e.target.value, "description", row)}
                placeholder=""
            />
        )
    },
    {
        Header: <CustomTableHeader value="Cost price" />,
        id: "costPrice",
        accessor: (row) => (
            <InputPrice
                value={row.costPrice}
                handleChange={(value) => handleChangeInput(value, "costPrice", row)}
            />
        )
    },
    {
        Header: <CustomTableHeader value="Price" />,
        id: "price",
        accessor: (row) => (
            <InputPrice
                value={row.price}
                handleChange={(value) => handleChangeInput(value, "price", row)}
            />
        )
    },
    {
        Header: <CustomTableHeader value="Qty" />,
        id: "quantity",
        accessor: (row) => (
            <InputQuantity
                value={row.quantity}
                handleChange={(value) => handleChangeInput(value, "quantity", row)}
            />
        ),
    },
    {
        Header: <CustomTableHeader value="Temp qty" />,
        id: "tempQuantity",
        accessor: (row) => (
            <InputQuantity
                value={row.tempQuantity}
                handleChange={(value) => handleChangeInput(value, "tempQuantity", row)}
            />
        ),
    },
    {
        Header: <CustomTableHeader value="Image" />,
        id: "imageUrl",
        accessor: (row) => (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img
                    style={{ width: 43, height: 43, marginTop: 5, cursor: 'auto' }}
                    src={row.imageUrl ? row.imageUrl : product_default} alt="imgjj"
                />
                <Dropzone
                    accept={"image/jpeg, image/png , image/gif"}
                    multiple={false}
                    maxFiles={1}
                    maxSize={10485760}
                    noDrag={true}
                    onDrop={(acceptedFiles) => {
                        uploadImagesOption(acceptedFiles, row.label);
                    }}
                >
                    {({ getRootProps, getInputProps }) => (
                        <div
                            className="images_inventory_dropzone_edit"
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            <img style={{ cursor: 'pointer' }} src={icon_upload} atl="uploadImage" />
                        </div>
                    )}
                </Dropzone>
                <img
                    style={{ width: 43, height: 43, marginTop: 5, cursor: 'pointer' }}
                    src={icon_trash} alt="imgjj"
                    onClick={() => deleteQuantities(row)}
                />
            </div>
        )
    },
];