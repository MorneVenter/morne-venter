import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';
import convertIcon from 'media/convert.svg';
import { useRef, useState } from 'react';
import { downloadBlob } from 'utils/fileHandling';
import { style } from './webm-converter.style';
import './loader.css';
import './glitch-button.css';

const WEBM_FILE_TYPE = 'video/webm';

export const WebmConverterConverter = () => {
	const { classes: css } = style();
	const inputRef = useRef(null);
	const ffmpegRef = useRef(new FFmpeg());

	const [isFfmpegLoaded, setIsFfmpegLoaded] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const loadFfmpeg = async () => {
		setIsLoading(true);
		try {
			const ffmpeg = ffmpegRef.current;
			const coreJs = await fetch('/ffmpeg/ffmpeg-core.js');
			const coreWasm = await fetch('/ffmpeg/ffmpeg-core.wasm');
			const coreJsBlob = await coreJs.blob();
			const coreWasmBlob = await coreWasm.blob();
			await ffmpeg.load({
				coreURL: window.URL.createObjectURL(coreJsBlob),
				wasmURL: window.URL.createObjectURL(coreWasmBlob),
			});
			setIsFfmpegLoaded(true);
		} catch (_e) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	const transcodeWebmToMp4 = async (fileToConvert: File) => {
		try {
			setIsLoading(true);
			const ffmpeg = ffmpegRef.current;
			const webmFile = await fetchFile(fileToConvert);
			await ffmpeg.writeFile('input.webm', webmFile);
			await ffmpeg.exec(['-i', 'input.webm', 'output.mp4']);
			const mp4File = await ffmpeg.readFile('output.mp4');
			const mp4Blob = new Blob([mp4File], { type: 'video/mp4' });
			downloadBlob(mp4Blob);
		} catch (_e) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	const onFileChange = (files: FileList | null) => {
		if (!files) return;
		const file = files.item(0);
		if (!file || file.type !== WEBM_FILE_TYPE) return;
		transcodeWebmToMp4(file);
	};

	const renderContent = () => {
		if (isError) return <p>error, please reload the page</p>;
		if (isLoading) return <span className='loader' />;
		if (!isFfmpegLoaded)
			return (
				<button className='button-49' onClick={loadFfmpeg}>
					load converter
				</button>
			);
		return (
			<>
				<input
					type='file'
					accept='.webm'
					ref={inputRef}
					id='file-upload'
					multiple={false}
					className={css.uploadInput}
					onChange={(e) => onFileChange(e.target.files)}
				/>
				<label htmlFor='file-upload' className='custom-file-upload'>
					<img src={convertIcon} alt={`convert-webm-button`} className={css.icon} />
				</label>
				<p className={css.subText}>click to upload a .webm file to convert it to .mp4</p>
			</>
		);
	};

	return (
		<div className={css.main}>
			<p className={css.header}>.webm to .mp4</p>
			{renderContent()}
		</div>
	);
};
