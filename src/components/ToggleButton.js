import React from 'react';

const ToggleButton = () => {
	return (
		<>
			<label class='switch'>
				<input type='checkbox' id='togBtn' />
				<div class='toggle round'>
					<span class='on'>Customer</span>
					<span class='off'>Agent</span>
				</div>
			</label>
		</>
	);
};

export default ToggleButton;
