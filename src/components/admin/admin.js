import React from "react";
import { Form, Upload, Row, Col, Button, Input } from 'antd';
import { InboxOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';
import './admin.scss';

function Admin() {
    // const [fileList, setFileList] = useState<UploadFile[]>([]);

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <div className="data-container">
            <div className="data-in-container">
                <Form name="validateData" autoComplete="off">
                    <Form.Item name="title">
                        <Input prefix={<EditOutlined className="site-form-item-icon" />} placeholder="Título" />
                    </Form.Item>
                    <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload action="/upload.do" listType="picture-card" maxCount={1} accept=".png, .jpeg, .jpg"
                        // fileList={fileList}
                        >
                            <div>
                                <PlusOutlined />
                                <div>Imagen (Máx: 1)</div>
                            </div>
                            {/* {fileList.length >= 1 ? null : uploadButton} */}
                        </Upload>
                    </Form.Item>
                    <Form.Item >
                        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                            <Upload.Dragger name="files" action="/upload.do" multiple={false} accept=".pdf">
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Arrasta o da clic para agregar un archivo.</p>
                                <p className="ant-upload-hint">Tamaño máximo de 10MB. Solo se permite un archivo</p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item
                    // wrapperCol={{
                    //   offset: 8,
                    //   span: 16,
                    // }}
                    >
                        <Row justify="center" gutter={16}>
                            <Col>
                                <Button type="dashed" href="/home">
                                    Cerrar sesión
                                </Button>
                            </Col>
                            <Col>
                                <Button type="primary" htmlType="submit">
                                    Guardar
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
export default Admin;