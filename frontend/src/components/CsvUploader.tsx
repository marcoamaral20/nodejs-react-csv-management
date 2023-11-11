import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Spinner } from 'react-bootstrap';
import SearchBar from './SearchBar';
import FileUploader from './FileUploader';
import FileInvalidMessage from './FileInvalidMessage';
import {
    Container,
    Bar,
    Toolbar,
    Title,
    Body,
    CardWrapper,
    Div, // Rename to avoid naming conflicts
} from './style/StyledComponents';

const CsvUploader: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [csvData, setCsvData] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [fileInvalid, setFileInvalid] = useState<boolean>(false);
    const [messageError, setMessageHere] = useState<string>('');

    const uploadFile = async () => {
        try {
            if (file) {
                const formData = new FormData();
                formData.append('file', file);

                const response = await axios.post('http://localhost:3000/api/files', formData);

                if (response.status === 200) {
                    await fetchUsersData();
                    setFileInvalid(false);
                } else {
                    handleFileUploadError(response.data.message);
                }
            }
        } catch (error: any) {
            handleFileUploadError(error.message);
        }
    };

    const fetchUsersData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/users?q=${searchTerm}`);
            setCsvData(response.data.data || []);
        } catch (error: any) {
            handleFetchDataError(error);
        }
    };

    const handleFileUploadError = (errorMessage: string) => {
        setMessageHere(errorMessage);
        setFileInvalid(true);
    };

    const handleFetchDataError = (error: any) => {
        if (error.response && error.response.status === 400) {
            handleFileUploadError(error.response.data.message);
        }
    };

    useEffect(() => {
        fetchUsersData();
    }, [searchTerm]);

    return (
        <Container>
            <Toolbar>
                <Bar>
                    <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                </Bar>

                <Title>
                    <h5>Shaw and Partners Test</h5>
                </Title>
                <Div>
                    <FileUploader onFileChange={setFile} />
                    <Button variant="primary" onClick={uploadFile} data-testid="upload-button" disabled={!file}>
                        Upload
                    </Button>
                </Div>

            </Toolbar>

            {fileInvalid && <FileInvalidMessage errorMessage={messageError} />}

            <Body>
                {csvData.map((row, index) => (
                    <CardWrapper key={index}>
                        <Card.Body>
                            {Object.entries(row).map(([key, value]) => (
                                <p key={key}>
                                    <strong>{key}: </strong> {String(value)}
                                </p>
                            ))}
                        </Card.Body>
                    </CardWrapper>
                ))}
            </Body>
        </Container>
    );
};

export default CsvUploader;
