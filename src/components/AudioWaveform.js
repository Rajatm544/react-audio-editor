import React, { useState, useEffect, useContext, useRef } from 'react';
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
import { FileContext } from '../contexts/fileContext';
import wavesurfer from 'wavesurfer.js';

const AudioWaveform = () => {
	const wavesurferRef = useRef(null);
	const timelineRef = useRef(null);

	// fetch file url from the context
	const { fileURL, setFileURL } = useContext(FileContext);

	// crate an instance of the wavesurfer
	const [wavesurferObj, setWavesurferObj] = useState();

	// to keep track whether audio is currently playing or not
	const [playing, setPlaying] = useState(true);
	// to control volume level of the audio. 0-mute, 1-max
	const [volume, setVolume] = useState(1);

	// create the waveform inside the correct component
	useEffect(() => {
		if (wavesurferRef.current && !wavesurferObj) {
			setWavesurferObj(
				wavesurfer.create({
					container: '#waveform',
					scrollParent: true,
					autoCenter: true,
					cursorColor: 'violet',
					loopSelection: true,
					waveColor: '#211027',
					progressColor: '#69207F',
					responsive: true,
					plugins: [
						TimelinePlugin.create({
							container: '#wave-timeline',
						}),
					],
				})
			);
		}
	}, [wavesurferRef, wavesurferObj]);

	// once the file URL is ready, load the file to produce the waveform
	useEffect(() => {
		if (fileURL && wavesurferObj) {
			wavesurferObj.load(fileURL);
		}
	}, [fileURL, wavesurferObj]);

	useEffect(() => {
		if (wavesurferObj) {
			// once the waveform is ready, play the audio
			wavesurferObj.on('ready', () => {
				wavesurferObj.play();
				wavesurferObj.enableDragSelection({}); // to select the region to be trimmed
			});

			// once audio starts playing, set the state variable to true
			wavesurferObj.on('play', () => {
				setPlaying(true);
			});

			// once audio starts playing, set the state variable to false
			wavesurferObj.on('finish', () => {
				setPlaying(false);
			});
		}
	}, [wavesurferObj]);

	// set volume of the wavesurfer object, whenever volume variable in state is changed
	useEffect(() => {
		if (wavesurferObj) wavesurferObj.setVolume(volume);
	}, [volume, wavesurferObj]);

	const handlePlayPause = (e) => {
		wavesurferObj.playPause();
		setPlaying(!playing);
	};

	const handleReload = (e) => {
		// stop will return the audio to 0s, then play it again
		wavesurferObj.stop();
		wavesurferObj.play();
		setPlaying(true); // to toggle the play/pause button icon
	};

	const handleVolumeSlider = (e) => {
		setVolume(e.target.value);
	};

	return (
		<section className='waveform-container'>
			<div ref={wavesurferRef} id='waveform' />
			<div ref={timelineRef} id='wave-timeline' />
			<div className='all-controls'>
				<button
					title='play/pause'
					className='controls'
					onClick={handlePlayPause}>
					{playing ? (
						<i className='material-icons'>pause</i>
					) : (
						<i className='material-icons'>play_arrow</i>
					)}
				</button>
				<button
					title='reload'
					className='controls'
					onClick={handleReload}>
					<i className='material-icons'>replay</i>
				</button>
				<div className='volume-slide-container'>
					{volume > 0 ? (
						<i className='material-icons'>volume_up</i>
					) : (
						<i className='material-icons'>volume_off</i>
					)}
					<input
						type='range'
						min='0'
						max='1'
						step='0.05'
						value={volume}
						onChange={handleVolumeSlider}
						className='slider volume-slider'
					/>
				</div>
			</div>
		</section>
	);
};

export default AudioWaveform;
