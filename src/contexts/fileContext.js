import React, { createContext, useState } from 'react';

const FileContext = createContext();

const FileContextProvider = ({ children }) => {
	const [fileURL, setFileURL] = useState('');
	return (
		<FileContext.Provider value={{ fileURL, setFileURL }}>
			{children}
		</FileContext.Provider>
	);
};

export { FileContext, FileContextProvider };
