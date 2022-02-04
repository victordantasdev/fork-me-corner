import React from 'react';
import styled from 'styled-components';
import { ForkMe } from '../fork-me-corner/src/';
import { flagDirectionType, prideFlagsType } from '../types/flags';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #131313;
  color: #fff;
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
`;

const ColorOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & input {
    margin-bottom: 10px;
  } 
`;

const Output = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
  width: 450px;
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 10px;
`;

const Code = styled.pre<{ active: boolean }>`
  padding: 10px;
  margin-top: 0;
  border: 1px solid ${({ active }) => (active ? 'red' : 'transparent')};
  transition: all 0.2s ease-in-out;
  width: 90%;
`;

const Button = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? 'red' : 'transparent')};
  color: #fff;
  border: 1px solid red;
  padding: 5px;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`;

const PrideFlags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & h2 {
    margin-bottom: 0;
  }

  & li {
    list-style: none;
  }

  & input {
    margin-right: 10px;
  }
`;

const Home = () => {
  const prideFlags = [
    { label: 'lgbtqia +', value: 'lgbtqia_plus' },
    { label: 'asexual', value: 'asexual' },
    { label: 'bisexual', value: 'bisexual' },
    { label: 'aromantic', value: 'aromantic' },
    { label: 'nonbinary', value: 'nonbinary' },
    { label: 'transgender', value: 'transgender' },
    { label: 'genderqueer', value: 'genderqueer' },
    { label: 'genderfluid', value: 'genderfluid' },
    { label: 'pansexual', value: 'pansexual' },
    { label: 'philly', value: 'philly' },
    { label: 'polysexual', value: 'polysexual' },
    { label: 'neutrois', value: 'neutrois' },
    { label: 'demigirl', value: 'demigirl' },
    { label: 'agender', value: 'agender' },
    { label: 'demiboy', value: 'demiboy' },
    { label: 'androgyne', value: 'androgyne' },
    { label: 'lesbian', value: 'lesbian' },
  ];

  const [active, setActive] = React.useState(false);
  const [bgColor, setBgColor] = React.useState<string | undefined>();
  const [octoColor, setOctoColor] = React.useState<string | undefined>();
  const [selectedFlag, setSelectedFlag] = React.useState<prideFlagsType>();
  const [flagDirection, setFlagDirection] = React.useState<flagDirectionType>();

  const handleOnChange = (flagValue: string) => {
    const flags = document.querySelectorAll('.flag');
    const flagItem = document.querySelector(`.${flagValue}`) as HTMLInputElement;
    const isChecked = flagItem.checked;

    flags.forEach((flag) => {
      const flagProps = flag as HTMLInputElement; 

      if (flagProps.value !== flagValue) {
        flagProps.checked = false;
      }

      flagItem.checked = isChecked;
    });

    if (!flagItem.checked) {
      return setSelectedFlag(undefined);
    }

    if (flagValue === 'none') {
      setOctoColor(undefined);
      setBgColor(undefined);
      return setSelectedFlag(undefined);
    }

    return setSelectedFlag(flagItem.value as prideFlagsType);
  };

  const handleFlagDirection = (flagDirectionValue: string) => {
    const flagsDirections = document.querySelectorAll('.flagDirection');
    const flagItem = document.querySelector(`.${flagDirectionValue}`) as HTMLInputElement;
    const isChecked = flagItem.checked;

    setFlagDirection(flagItem.value as flagDirectionType);

    if (!flagItem.checked) setFlagDirection(undefined);

    flagsDirections.forEach((flag: HTMLInputElement) => {
      if (flag.value !== flagDirectionValue) {
        flag.checked = false;
      }

      flagItem.checked = isChecked;
    });
  };

  const octoColorOut = octoColor === undefined || octoColor.length === 0
    ? ''
    : ` octoColor='${octoColor}'\n`;
  const bgColorOut = bgColor === undefined || bgColor.length === 0
    ? ''
    : ` bgColor='${bgColor}'\n`;
  const selectedFlagOut = selectedFlag === undefined ? '' : ` prideFlag='${selectedFlag}'\n`;
  const flagDirectionOut = flagDirection === undefined ? '' : ` flagDirection='${flagDirection}'\n`;

  const out = '<ForkMe \n'
    + ` repo="https://github.com/user/repo"\n${
      octoColorOut
    }${bgColorOut
    }${selectedFlagOut
    }${flagDirectionOut
    }/>`;

  const handleClick = () => {
    navigator.clipboard.writeText(out);
    setActive(true);

    setTimeout(() => setActive(false), 1000);
  };

  return (
    <Container>
      <ForkMe
        repo="https://github.com/victordantasdev/fork-me-corner"
        octoColor={octoColor}
        bgColor={bgColor}
        prideFlag={selectedFlag}
        flagDirection={flagDirection}
      />

      <h1>fork-me-corner playground</h1>

      <Options>
        <ColorOptions>
          <label htmlFor="octoColor">Octo Color:</label>
          <input
            name="octoColor"
            type="text"
            placeholder="#fff"
            value={octoColor || ''}
            onChange={(e) => {
              if (e.target.value.charAt(0) !== '#') return setOctoColor('');
              setOctoColor(e.target.value);
            }}
          />

          <label htmlFor="bgColor">Bg Color:</label>
          <input
            name="bgColor"
            type="text"
            placeholder="#000"
            value={bgColor || ''}
            onChange={(e) => {
              if (e.target.value.charAt(0) !== '#') return setBgColor('');
              setBgColor(e.target.value);
            }}
          />

          <Output>
            <Code active={active}>
              {out}
            </Code>

            <Button
              active={active}
              onClick={handleClick}
            >
              Copy to clipboard
            </Button>
          </Output>
        </ColorOptions>

        <PrideFlags>
          <h2>Pride flag</h2>
          <li>
            <label htmlFor="none">
              <input
                type="checkbox"
                name="none"
                value="none"
                className="none flag"
                onChange={() => handleOnChange('none')}
              />
              None
            </label>
          </li>
          {prideFlags.map((flag) => (
            <li key={flag.value}>
              <label htmlFor={flag.label}>
                <input
                  type="checkbox"
                  name={flag.label}
                  value={flag.value}
                  className={`${flag.value} flag`}
                  onChange={() => handleOnChange(flag.value)}
                />
                {flag.label}
              </label>
            </li>
          ))}
        </PrideFlags>

        <PrideFlags>
          <h2>Flag direction</h2>
          <li>
            <label htmlFor="horizontal">
              <input
                type="checkbox"
                name="horizontal"
                value="horizontal"
                className="horizontal flagDirection"
                onChange={() => handleFlagDirection('horizontal')}
              />
              Horizontal
            </label>
          </li>

          <li>
            <label htmlFor="vertical">
              <input
                type="checkbox"
                name="vertical"
                value="vertical"
                className="vertical flagDirection"
                onChange={() => handleFlagDirection('vertical')}
              />
              Vertical
            </label>
          </li>
        </PrideFlags>
      </Options>
    </Container>
  );
}

export default Home;
