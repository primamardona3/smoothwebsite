import React, {useState} from 'react';
import Video from '../../Video/videothree.mp4';
import { Button } from '../ButtonElements';
import { 
        HeroContainer, 
        HeroBg, 
        VideoBg,
        HeroContent,
        HeroH1,
        HeroA,
        HeroP,
        HeroBtnWrapper,
        ArrowForward,
        ArrowRight
        } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1> Virtual Holiday Kaur Selatan  </HeroH1>
                <HeroA> Dibagian selatan provinsi bengkulu memiliki wisata pantai yang sangat indah dengan pemandangan 
                    laut yang biru dan pasir yang putih terdapat hamparan karang yang masih memiliki nilai keasrian dilengkapi dengan pepohonan kelapa yang tumbuh subur sehingga membuat
                    para wisatawan yang berkunjung bisa betah berlama lama di wisata kaur selatan, silahkan ajak teman pasangan keluarga kalian untuk menikmati wisata kami</HeroA>
                    <HeroP> Sign up for a new account today</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' 
                    onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >
                    Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
