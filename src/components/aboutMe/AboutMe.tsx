import { shuffleArray } from '../../utils/arrayOperations';
import { style } from './about-me.style';
import self from '../../media/self.jpg';

export const AboutMe = () => {
  const css = style();
  const skills = [
    'React',
    'Angular',
    '.NET',
    'JavaScript',
    'C#',
    'Unity 3D',
    'Blender',
    'Godot Engine',
    'Image Processing',
    'Mathematics',
  ];

  return (
    <div className={css.container}>
      <h1 className={css.header}>About Me</h1>
      <div className={css.aboutMeContainer}>
        <img
          src={self}
          alt={'self'}
          className={css.image}
        />
        <div className={css.aboutMeText}>
          <p>i was born in South Africa in 1997.</p>
          <p>i am pursuing new means of expression through video game development.</p>
          <p>
            i believe that we have yet to discover the full potential of interactive art mediums. i endeavor to push
            myself, my art and my skills as far as i can to realize my goals.
          </p>
        </div>
      </div>
      <div className={css.skillRow}>
        {shuffleArray(skills).map((skill) => (
          <p
            key={`${skill}-key`}
            className={css.skill}
          >
            {skill}
          </p>
        ))}
      </div>
      <br />
      <div>
        <iframe
          title='my songs'
          style={{ borderRadius: '12px' }}
          src='https://open.spotify.com/embed/playlist/21GOBiCkhjCd2cEC9eDnhT?utm_source=generator&theme=0'
          width='100%'
          height='380'
          frameBorder='0'
          allowFullScreen={false}
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
};
