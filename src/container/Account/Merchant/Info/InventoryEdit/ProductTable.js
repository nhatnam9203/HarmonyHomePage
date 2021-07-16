import React from 'react'
import ReactTable from "react-table";
import Title from "@/components/Title";
import CustomTableHeader from "../../Info/CustomTableHeader";
import product_default from "@/assets/images/product_default.png";
import icon_upload from "@/assets/images/retailer/icon_upload.png";
import Dropzone from "react-dropzone";
import "./style.scss";

const ProductTable = ({ quantities = [], uploadImagesOption = () => { } }) => {
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
                columns={columns(uploadImagesOption)}
                PaginationComponent={() => <div />}
            />
        </>
    )
}

export default ProductTable;


const columns = (uploadImagesOption) => [
    {
        Header: <CustomTableHeader value="Versions" />,
        id: "label",
        accessor: (row) => <div className="table-tr">{row.label}</div>,
        width: 400,
    },
    {
        Header: <CustomTableHeader value="Cost price" />,
        id: "costPrice",
        accessor: (row) => <div className="table-tr">{`$ ${row.costPrice}`}</div>,
    },
    {
        Header: <CustomTableHeader value="Additional price" />,
        id: "additionalPrice",
        accessor: (row) => (
            <div className="table-tr">{`${row.additionalPrice || "0"}`}</div>
        ),
    },
    {
        Header: <CustomTableHeader value="Qty" />,
        id: "quantity",
        accessor: (row) => (
            <div className="table-tr">{`${row.quantity || "0"}`}</div>
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
            </div>
        )
    },
];