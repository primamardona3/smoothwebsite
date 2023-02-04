import React from 'react';
import Icon1 from '../../images/svg-2.svg';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/dyqo.svg';
import { 
        ServiceContainer,
        ServiceH1,
        ServiceWrapper,
        ServiceCard,
        ServiceIcon,
        ServiceH2,
        ServiceP
} from './ServiceElements';
const Service = () => {
  return (
    <ServiceContainer id="service">
        <ServiceH1>Our Service</ServiceH1>
        <ServiceWrapper>
            <ServiceCard>
                <ServiceIcon src={Icon1}/>
                <ServiceH2>Reduce Expanses</ServiceH2>
                <ServiceP>Kita akan membantu kalian untuk memandu pembuatan akun</ServiceP>
            </ServiceCard>
            <ServiceCard>
                <ServiceIcon src={Icon2}/>
                <ServiceH2>Virtual Offices</ServiceH2>
                <ServiceP>Kamu bisa menggunakan apps dimana saja</ServiceP>
            </ServiceCard>
            <ServiceCard>
                <ServiceIcon src={Icon3}/>
                <ServiceH2>Premium Benefits</ServiceH2>
                <ServiceP>Amankan kata sandi anda</ServiceP>
            </ServiceCard>
        </ServiceWrapper>
    </ServiceContainer>
  )
}

export default Service;
