import React from "react";
import Modal from "react-bootstrap/Modal";
import Dropzone from "react-dropzone";
import Loading from "@/components/Loading";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
import "./style.scss";

const Index = ({ isVisible = false, close, upload }) => {
  const { loadingUpfile } = useSelector((state) => state.retailer);

  const [files, setFiles] = React.useState([]);

  const onUpload = () => {
    upload(files, closePopup);
  };

  const closePopup = () => {
    setFiles([]);
    close();
  };

  return (
    <>
      <Modal
        show={isVisible}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="popup_upload_container"
      >
        <div className="upload_container">
          {/* ------------------ DROP ZONE IMAGE ------------------  */}
          <div>
            <Dropzone
              accept={"image/jpeg, image/png , image/gif"}
              multiple={false}
              maxFiles={1}
              maxSize={10485760}
              onDrop={(acceptedFiles) => setFiles(acceptedFiles)}
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <div className="upload_container_dropZone" {...getRootProps()}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the file here ...</p>
                  ) : (
                    <p>Drag and drop file here, or click to select file</p>
                  )}
                </div>
              )}
            </Dropzone>

            {/* ------------------ SHOW FILE UPLOAD ------------------  */}
            <div className="files_list">
              <h4>File Upload</h4>
              {files.map((f, key) => (
                <p key={f.name + key}>{f.name}</p>
              ))}
            </div>
          </div>

          {/* ------------------BUTTON ------------------  */}
          <div className="upload_container_button_group">
            <div className="button_cancel_upload" onClick={closePopup}>
              Cancel
            </div>
            <div
              className="upload_container_button button_upload"
              variant="primary"
              onClick={isEmpty(files) ? () => {} : onUpload}
            >
              Upload
            </div>
          </div>

          {/* ------------------ LOADING ------------------  */}
          {loadingUpfile && (
            <div className="upload_container_loading">
              <Loading />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Index;
