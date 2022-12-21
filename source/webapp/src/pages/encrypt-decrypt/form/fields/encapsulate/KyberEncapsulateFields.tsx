import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import RegularInputField from "../../../../../components/form/RegularInputField";

type Props = {
    authToken: any;
}

const KyberEncapsulateFields = ({authToken}: Props) => {

    const [n, setN] = useState<string>();
    const [q, setQ] = useState<string>();
    const [eta, setEta] = useState<string>();
    const [k, setK] = useState<string>();
    const [du, setDu] = useState<string>();
    const [dv, setDv] = useState<string>();
    const [keyId, setKeyId] = useState<string>();
    const [pk, setPk] = useState<string>();
    const [sk, setSk] = useState<string>();
    const [iterations, setIterations] = useState<string>();
    const [message, setMessage] = useState<string>();

    const handleKyberEncapsulate = () => {

        setMessage("n: " + n + ", q: " + q + ", eta: " + eta + ", k: " + k + ", du: " + du + ", dv: " + dv + ", keyId: " + keyId +
            ", public key: " + pk + ", secret key: " + sk + ", iterations: " + iterations);
    }

    return (
        <Row>
            <div className={"form-field mb-3"}>
                <Col className="form-label no-padding-left mb-2">
                    Parameters
                </Col>
                <Row>
                    <Col className="d-flex gap-4 no-padding-left mb-3" xs={{span: 12}}>
                        <RegularInputField fieldName={"n"} fieldValue={""}
                                           setFieldValue={setN}
                                           fieldAreaLabel={"n"}/>
                        <RegularInputField fieldName={"q"} fieldValue={""}
                                           setFieldValue={setQ}
                                           fieldAreaLabel={"q"}/>
                        <RegularInputField fieldName={"eta"} fieldValue={""}
                                           setFieldValue={setEta}
                                           fieldAreaLabel={"eta"}/>
                    </Col>
                    <Col className="d-flex gap-4 no-padding-left mb-3" xs={{span: 12}}>
                        <RegularInputField fieldName={"k"} fieldValue={""}
                                           setFieldValue={setK}
                                           fieldAreaLabel={"k"}/>
                        <RegularInputField fieldName={"du"} fieldValue={""}
                                           setFieldValue={setDu}
                                           fieldAreaLabel={"du"}/>
                        <RegularInputField fieldName={"dv"} fieldValue={""}
                                           setFieldValue={setDv}
                                           fieldAreaLabel={"dv"}/>
                    </Col>
                    <Col className="d-flex gap-4 no-padding-left mb-3" xs={{span: 12}}>
                        <RegularInputField fieldName={"Key id"} fieldValue={""}
                                           setFieldValue={setKeyId}
                                           fieldAreaLabel={"keyId"}/>
                        <RegularInputField fieldName={"Public key"} fieldValue={""}
                                           setFieldValue={setPk}
                                           fieldAreaLabel={"pk"}/>
                        <RegularInputField fieldName={"Secret key"} fieldValue={""}
                                           setFieldValue={setSk}
                                           fieldAreaLabel={"du"}/>
                    </Col>
                    <Col className="d-flex gap-4 no-padding-left mb-3" xs={{span: 2}}>
                        <RegularInputField fieldName={"Iterations"} fieldValue={""}
                                           setFieldValue={setIterations}
                                           fieldAreaLabel={"interations"}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="no-padding-left content-align-end">
                        <Button
                            className="button"
                            variant="primary"
                            onClick={() => handleKyberEncapsulate()}>
                            Encapsulate
                        </Button>
                    </Col>
                </Row>
                <Row className="no-padding-left">
                    <Col className="no-padding-left no-padding-right">
                        {
                            message && (
                                <div className="form-group">
                                    <div
                                        className="alert alert-success d-flex justify-content-center"
                                        role="alert">
                                        {message}
                                    </div>
                                </div>
                            )
                        }
                    </Col>
                </Row>
            </div>
        </Row>
    );
}

export default KyberEncapsulateFields;
