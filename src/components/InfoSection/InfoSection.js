import React from 'react';
import {
  Section,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrapper,
  Img
} from './Style';
import { Container, Button } from '../../global-style';
import { Link } from 'react-router-dom';
const InfoSection = ({
  buttonLabel,
  description,
  headLine,
  imgStart,
  lightBg,
  lightText,
  lightTextDesc,
  lightTopLine,
  primary,
  topLine,
  start,
  alt,
  img
}) => {
  return (
    <>
      <Section lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                <Link to='/signup'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </Section>
    </>
  );
};

export default InfoSection;
