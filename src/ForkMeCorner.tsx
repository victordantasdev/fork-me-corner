import React from 'react';
import styled, { keyframes } from 'styled-components';

export type Props = {
  repo?: string;
  bgColor?: string;
  octoColor?: string;
  flagDirection?: 'horizontal' | 'vertical'
  prideFlag?:
    'lgbt' |
    'asexual' |
    'bisexual' |
    'aromantic' |
    'nonbinary' |
    'aromantic' |
    'transgender' |
    'genderqueer' |
    'genderfluid' |
    'pansexual' |
    'philly' |
    'polysexual' |
    'neutrois' |
    'demigirl' |
    'agender' |
    'demiboy' |
    'androgyne' |
    'lesbian'
}

const octocatWave = keyframes`
  0%, 100% {
      transform: rotate(0)
    }

  20%, 60% {
    transform:rotate(-25deg)
  }

  40%, 80% {
    transform:rotate(10deg)
  }
`;

const Corner = styled.a<Props>`
  & svg {
    fill: ${({ bgColor, prideFlag }) => (prideFlag !== undefined ? `url(#${prideFlag})` : bgColor)};
    color: ${({ octoColor }) => octoColor};
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
    filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
    /* transform: rotate(180deg); */
  }

  &:hover .octo-arm {
    animation: ${octocatWave} 560ms ease-in-out;
  }

  @media (max-width:500px){
    &:hover .octo-arm{
      animation: none;
    }

    & .octo-arm{
      animation: ${octocatWave} 560ms ease-in-out;
    }
  }
`;

export function ForkMe({
  repo,
  prideFlag,
  flagDirection = 'horizontal',
  bgColor = '#000',
  octoColor = '#fff',
}: Props) {
  const rotate = flagDirection === 'horizontal' ? 'rotate(90)' : 'rotate(0)';
  return (
    <Corner
      href={repo}
      className="github-corner"
      aria-label="View source on GitHub"
      bgColor={bgColor}
      octoColor={octoColor}
      prideFlag={prideFlag}
      target="_blank"
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 250 250"
        aria-hidden="true"
      >
        <path
          d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
        />
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          style={{
            transformOrigin: '130px 106px',
            filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))',
          }}
          className="octo-arm"
        />
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
          style={{
            filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))',
          }}
          className="octo-body"
        />

        {/* lgbt flag */}
        <defs>
          <linearGradient id="lgbt" gradientTransform={rotate}>
            <stop offset="16.66%" stopColor="#FE0000" />
            <stop offset="16.66%" stopColor="#FD8C00" />
            <stop offset="33.32%" stopColor="#FD8C00" />
            <stop offset="33.32%" stopColor="#FFE500" />
            <stop offset="49.98%" stopColor="#FFE500" />
            <stop offset="49.98%" stopColor="#119F0B" />
            <stop offset="66.64%" stopColor="#119F0B" />
            <stop offset="66.64%" stopColor="#0644B3" />
            <stop offset="83.3%" stopColor="#0644B3" />
            <stop offset="83.3%" stopColor="#C22EDC" />
          </linearGradient>
        </defs>

        {/* asexual flag */}
        <defs>
          <linearGradient id="asexual" gradientTransform={rotate}>
            <stop offset="25%" stopColor="#181818" />
            <stop offset="25%" stopColor="#A3A3A3" />
            <stop offset="50%" stopColor="#A3A3A3" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="75%" stopColor="#FFFFFF" />
            <stop offset="75%" stopColor="#800080" />
          </linearGradient>
        </defs>

        {/* bisexual flag */}
        <defs>
          <linearGradient id="bisexual" gradientTransform={rotate}>
            <stop offset="40%" stopColor="#D60270" />
            <stop offset="40%" stopColor="#9B4F96" />
            <stop offset="60%" stopColor="#9B4F96" />
            <stop offset="60%" stopColor="#0038A8" />
          </linearGradient>
        </defs>

        {/* aromantic flag */}
        <defs>
          <linearGradient id="aromantic" gradientTransform={rotate}>
            <stop offset="20%" stopColor="#39A33E" />
            <stop offset="20%" stopColor="#A2CF72" />
            <stop offset="40%" stopColor="#A2CF72" />
            <stop offset="40%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#A3A3A3" />
            <stop offset="80%" stopColor="#A3A3A3" />
            <stop offset="80%" stopColor="#181818" />
          </linearGradient>
        </defs>

        {/* nonbinary flag */}
        <defs>
          <linearGradient id="nonbinary" gradientTransform={rotate}>
            <stop offset="25%" stopColor="#FFF430" />
            <stop offset="25%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#9C59D1" />
            <stop offset="75%" stopColor="#9C59D1" />
            <stop offset="75%" stopColor="#181818" />
          </linearGradient>
        </defs>

        {/* transgender flag */}
        <defs>
          <linearGradient id="transgender" gradientTransform={rotate}>
            <stop offset="20%" stopColor="#5BCEFA" />
            <stop offset="20%" stopColor="#F5A9B8" />
            <stop offset="40%" stopColor="#F5A9B8" />
            <stop offset="40%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F5A9B8" />
            <stop offset="80%" stopColor="#F5A9B8" />
            <stop offset="80%" stopColor="#5BCEFA" />
          </linearGradient>
        </defs>

        {/* genderqueer flag */}
        <defs>
          <linearGradient id="genderqueer" gradientTransform={rotate}>
            <stop offset="33.33%" stopColor="#B57EDC" />
            <stop offset="33.33%" stopColor="#FFFFFF" />
            <stop offset="66.66%" stopColor="#FFFFFF" />
            <stop offset="66.66%" stopColor="#4A8123" />
          </linearGradient>
        </defs>

        {/* genderfluid flag */}
        <defs>
          <linearGradient id="genderfluid" gradientTransform={rotate}>
            <stop offset="20%" stopColor="#FF77A3" />
            <stop offset="20%" stopColor="#FFFFFf" />
            <stop offset="40%" stopColor="#FFFFFf" />
            <stop offset="40%" stopColor="#BE18D6" />
            <stop offset="60%" stopColor="#BE18D6" />
            <stop offset="60%" stopColor="#181818" />
            <stop offset="80%" stopColor="#181818" />
            <stop offset="80%" stopColor="#333EBD" />
          </linearGradient>
        </defs>

        {/* pansexual flag */}
        <defs>
          <linearGradient id="pansexual" gradientTransform={rotate}>
            <stop offset="33.33%" stopColor="#FF218C" />
            <stop offset="33.33%" stopColor="#FFD800" />
            <stop offset="66.66%" stopColor="#FFD800" />
            <stop offset="66.66%" stopColor="#21B1FF" />
          </linearGradient>
        </defs>

        {/* philly flag */}
        <defs>
          <linearGradient id="philly" gradientTransform={rotate}>
            <stop offset="12.5%" stopColor="#181818" />
            <stop offset="12.5%" stopColor="#784F17" />
            <stop offset="25%" stopColor="#784F17" />
            <stop offset="25%" stopColor="#FE0000" />
            <stop offset="37.5%" stopColor="#FE0000" />
            <stop offset="37.5%" stopColor="#FD8C00" />
            <stop offset="50%" stopColor="#FD8C00" />
            <stop offset="50%" stopColor="#FFE500" />
            <stop offset="62.5%" stopColor="#FFE500" />
            <stop offset="62.5%" stopColor="#119F0B" />
            <stop offset="75%" stopColor="#119F0B" />
            <stop offset="75%" stopColor="#0644B3" />
            <stop offset="87.5%" stopColor="#0644B3" />
            <stop offset="87.5%" stopColor="#C22EDC" />
          </linearGradient>
        </defs>

        {/* polysexual flag */}
        <defs>
          <linearGradient id="polysexual" gradientTransform={rotate}>
            <stop offset="33.33%" stopColor="#F61CB9" />
            <stop offset="33.33%" stopColor="#07D569" />
            <stop offset="66.66%" stopColor="#07D569" />
            <stop offset="66.66%" stopColor="#1C92F6" />
          </linearGradient>
        </defs>

        {/* polysexual flag */}
        <defs>
          <linearGradient id="polysexual" gradientTransform={rotate}>
            <stop offset="33.33%" stopColor="#F61CB9" />
            <stop offset="33.33%" stopColor="#07D569" />
            <stop offset="66.66%" stopColor="#07D569" />
            <stop offset="66.66%" stopColor="#1C92F6" />
          </linearGradient>
        </defs>

        {/* neutrois flag */}
        <defs>
          <linearGradient id="neutrois" gradientTransform={rotate}>
            <stop offset="33.33%" stopColor="#FFFFFF" />
            <stop offset="33.33%" stopColor="#1F9F00" />
            <stop offset="66.66%" stopColor="#1F9F00" />
            <stop offset="66.66%" stopColor="#181818" />
          </linearGradient>
        </defs>

        {/* demigirl flag */}
        <defs>
          <linearGradient id="demigirl" gradientTransform={rotate}>
            <stop offset="14.285%" stopColor="#7F7F7F" />
            <stop offset="14.285%" stopColor="#C3C3C3" />
            <stop offset="28.57%" stopColor="#C3C3C3" />
            <stop offset="28.57%" stopColor="#FEAEC9" />
            <stop offset="42.855%" stopColor="#FEAEC9" />
            <stop offset="42.855%" stopColor="#FFFFFF" />
            <stop offset="57.14%" stopColor="#FFFFFF" />
            <stop offset="57.14%" stopColor="#FEAEC9" />
            <stop offset="71.425%" stopColor="#FEAEC9" />
            <stop offset="71.425%" stopColor="#C3C3C3" />
            <stop offset="85.71%" stopColor="#C3C3C3" />
            <stop offset="85.71%" stopColor="#7F7F7F" />
          </linearGradient>
        </defs>

        {/* agender flag */}
        <defs>
          <linearGradient id="agender" gradientTransform={rotate}>
            <stop offset="14.285%" stopColor="#181818" />
            <stop offset="14.285%" stopColor="#C3C3C3" />
            <stop offset="28.57%" stopColor="#C3C3C3" />
            <stop offset="28.57%" stopColor="#FFFFFF" />
            <stop offset="42.855%" stopColor="#FFFFFF" />
            <stop offset="42.855%" stopColor="#B8F483" />
            <stop offset="57.14%" stopColor="#B8F483" />
            <stop offset="57.14%" stopColor="#FFFFFF" />
            <stop offset="71.425%" stopColor="#FFFFFF" />
            <stop offset="71.425%" stopColor="#C3C3C3" />
            <stop offset="85.71%" stopColor="#C3C3C3" />
            <stop offset="85.71%" stopColor="#181818" />
          </linearGradient>
        </defs>

        {/* demiboy flag */}
        <defs>
          <linearGradient id="demiboy" gradientTransform={rotate}>
            <stop offset="14.285%" stopColor="#7F7F7F" />
            <stop offset="14.285%" stopColor="#C3C3C3" />
            <stop offset="28.57%" stopColor="#C3C3C3" />
            <stop offset="28.57%" stopColor="#9AD9EB" />
            <stop offset="42.855%" stopColor="#9AD9EB" />
            <stop offset="42.855%" stopColor="#FFFFFF" />
            <stop offset="57.14%" stopColor="#FFFFFF" />
            <stop offset="57.14%" stopColor="#9AD9EB" />
            <stop offset="71.425%" stopColor="#9AD9EB" />
            <stop offset="71.425%" stopColor="#C3C3C3" />
            <stop offset="85.71%" stopColor="#C3C3C3" />
            <stop offset="85.71%" stopColor="#7F7F7F" />
          </linearGradient>
        </defs>

        {/* androgyne flag */}
        <defs>
          <linearGradient id="androgyne" gradientTransform={rotate}>
            <stop offset="33.33%" stopColor="#FE007F" />
            <stop offset="33.33%" stopColor="#9832FF" />
            <stop offset="66.66%" stopColor="#9832FF" />
            <stop offset="66.66%" stopColor="#00B8E7" />
          </linearGradient>
        </defs>

        {/* lesbian flag */}
        <defs>
          <linearGradient id="lesbian" gradientTransform={rotate}>
            <stop offset="14.285%" stopColor="#A60061" />
            <stop offset="14.285%" stopColor="#B95393" />
            <stop offset="28.57%" stopColor="#B95393" />
            <stop offset="28.57%" stopColor="#D260A7" />
            <stop offset="42.855%" stopColor="#D260A7" />
            <stop offset="42.855%" stopColor="#EDEDEB" />
            <stop offset="57.14%" stopColor="#EDEDEB" />
            <stop offset="57.14%" stopColor="#E5ABD0" />
            <stop offset="71.425%" stopColor="#E5ABD0" />
            <stop offset="71.425%" stopColor="#C74D52" />
            <stop offset="85.71%" stopColor="#C74D52" />
            <stop offset="85.71%" stopColor="#8C1D00" />
          </linearGradient>
        </defs>
      </svg>
    </Corner>
  );
}
