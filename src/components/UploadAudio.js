import React, { useState, useEffect, useRef } from 'react';

const UploadAudio = () => {
	const inputFile = useRef(null);
	const [file, setFile] = useState(null);

	useEffect(() => {
		console.log(file);
	}, [file]);

	// handle image overlay div's click to upload new file
	const handleButtonClick = () => {
		inputFile.current.click();
	};

	const handleFileUpload = (e) => {
		setFile(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<div className='upload-audio'>
			<h1>Upload your audio file here </h1>
			<button onClick={handleButtonClick}>Upload</button>
			<input
				type='file'
				id='file'
				ref={inputFile}
				style={{ display: 'none' }}
				accept='audio/*'
				onChange={handleFileUpload}
			/>
		</div>
	);
};

export default UploadAudio;
