import React, { Component } from 'react';
import Dropzone from "react-dropzone";
import iconImport from "@/assets/images/retailer/iconImport.png";

export default class Buttonimport extends Component {
    render() {
        return (
            <Dropzone
                accept={".xlsx , .xls, .csv, text/csv, application/vnd.ms-excel, application/csv, text/x-csv, application/x-csv, text/comma-separated-values, text/x-comma-separated-values"}
                multiple={false}
                maxSize={10485760}
                noDrag={true}
                onDrop={(acceptedFiles) => {
                    this.props.importInventory(acceptedFiles);
                }}
            >
                {({ getRootProps, getInputProps }) => (
                    <div
                        className="buttonUpload"
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <p>Upload</p>
                        <img src={iconImport} atl="uploadImage" />
                    </div>
                )}
            </Dropzone>
        )
    }
}
