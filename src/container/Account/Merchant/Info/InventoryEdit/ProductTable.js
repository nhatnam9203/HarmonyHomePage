import React from 'react'
import ReactTable from "react-table";
import Title from "@/components/Title";
import CustomTableHeader from "../../Info/CustomTableHeader";
import product_default from "@/assets/images/product_default.png";
import icon_upload from "@/assets/images/retailer/icon_upload.png";
import icon_trash from "@/assets/images/retailer/trash.png";
import Dropzone from "react-dropzone";
import InputPrice from "./widget/InputPrice";
import InputQuantity from "./widget/InputQuantity";
import "./style.scss";

const ProductTable = ({
    quantities = [],
    uploadImagesOption = () => { },
    handleChangeInput = () => { },
    deleteOption = () => { },
}) => {

    return (
        <>
            <Title
                style={{
                    borderBottomWidth: 0,
                    marginTop: "2.5rem",
                    marginBottom: "0.5rem",
                }}
            >
                Product Versions
            </Title>
            <ReactTable
                className="table-inventoryDetail"
                manual
                sortable={false}
                data={quantities || []}
                minRows={1}
                noDataText="NO DATA!"
                NoDataComponent={() => <div className="retailer_nodata">NO DATA!</div>}
                columns={columns(uploadImagesOption, handleChangeInput, deleteOption)}
                PaginationComponent={() => <div />}
            />
        </>
    )
}

export default ProductTable;


const columns = (uploadImagesOption, handleChangeInput, deleteOption) => [
    {
        Header: <CustomTableHeader value="Versions" />,
        id: "label",
        accessor: (row) => <div className="table-tr">{row.label}</div>,
        width: 280,
    },
    {
        Header: <CustomTableHeader value="Description" />,
        id: "description",
        accessor: (row) => (
            <input
                className="input_price"
                value={row.description}
                onChange={(e) => handleChangeInput(e.target.value, "description", row.id)}
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
                handleChange={(value) => handleChangeInput(value, "costPrice", row.id)}
            />
        )
    },
    {
        Header: <CustomTableHeader value="Price" />,
        id: "price",
        accessor: (row) => (
            <InputPrice
                value={row.price}
                handleChange={(value) => handleChangeInput(value, "price", row.id)}
            />
        )
    },
    {
        Header: <CustomTableHeader value="Qty" />,
        id: "quantity",
        accessor: (row) => (
            <InputQuantity
                value={row.quantity}
                handleChange={(value) => handleChangeInput(value, "quantity", row.id)}
            />
        ),
    },
    {
        Header: <CustomTableHeader value="Image" />,
        id: "imageUrl",
        accessor: (row) => (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img
                    style={{ width: 43, height: 43, marginTop: 5 }}
                    src={row.imageUrl ? row.imageUrl : product_default} alt="imgjj"
                />
                <Dropzone
                    accept={"image/jpeg, image/png , image/gif"}
                    multiple={false}
                    maxFiles={1}
                    maxSize={10485760}
                    noDrag={true}
                    onDrop={(acceptedFiles) => {
                        uploadImagesOption(acceptedFiles, row.id);
                    }}
                >
                    {({ getRootProps, getInputProps }) => (
                        <div
                            className="images_inventory_dropzone_edit"
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            <img src={icon_upload} atl="uploadImage" />
                        </div>
                    )}
                </Dropzone>
                <img
                    style={{ width: 43, height: 43, marginTop: 5 }}
                    src={icon_trash} alt="imgjj"
                    onClick={() => deleteOption(row.id)}
                />
            </div>
        )
    },
];