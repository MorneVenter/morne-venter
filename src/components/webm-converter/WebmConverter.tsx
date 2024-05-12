import { useEffect, useRef, useState } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL, fetchFile } from '@ffmpeg/util';
import { downloadBlob } from '../../utils/fileHandling';
import { style } from './webm-converter.style';
import convertIcon from '../../media/convert.svg';
import './loader.css';

const WEBM_FILE_TYPE = 'video/webm';

export const WebmConverterConverter = () => {
  const css = style();
  const inputRef = useRef(null);
  const ffmpegRef = useRef(new FFmpeg());

  const [isFfmpegLoaded, setIsFfmpegLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadFfmpeg = async () => {
    setIsLoading(true);
    try {
      const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
      const ffmpeg = ffmpegRef.current;
      await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      });
      setIsFfmpegLoaded(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadFfmpeg();
  }, []);

  if (isLoading)
    return (
      <div className={css.main}>
        <span className='loader' />
      </div>
    );

  if (!isFfmpegLoaded)
    return (
      <div className={css.main}>
        <p>error, please refresh the page</p>
      </div>
    );

  return (
    <div className={css.main}>
      <input
        type='file'
        accept='.webm'
        ref={inputRef}
        id='file-upload'
        multiple={false}
        className={css.uploadInput}
        onChange={(e) => onFileChange(e.target.files)}
      />
      <label
        htmlFor='file-upload'
        className='custom-file-upload'
      >
        <img
          src={convertIcon}
          alt={`convert-webm-button`}
          className={css.icon}
        />
      </label>
      <p className={css.subText}>click to upload a .webm file to convert it to .mp4</p>
    </div>
  );
};
