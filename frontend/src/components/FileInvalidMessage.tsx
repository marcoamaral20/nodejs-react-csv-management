// FileInvalidMessage.tsx
import React from 'react';

const FileInvalidMessage: React.FC = () => {
  return (
    <div className="alert alert-danger" role="alert">
      The uploaded file is failed. Please try again.
    </div>
  );
};

export default FileInvalidMessage;
