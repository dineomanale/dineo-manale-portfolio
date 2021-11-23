import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Welcome To<br />
       My Personal Portfolio Dineo Manale

     </SectionTitle>
     <SectionText>
     I believe that my experience with technology, specifically in the web design space, make me the best match for this position. In my previous job, I was responsible for maintaining and updating our company website. This required keeping employee profiles updated and continuously posting information regarding upcoming events. I truly enjoyed what I was doing, which is what drew me to this position with your company. I would love to bring the coding and content skills I learned there to this position.
     <SectionTitle>
       About Me
     </SectionTitle>
     </SectionText>
     I am a hardworking person who likes challenges. I can work individually as well as in group. My
main strength is that I always keep my eyes on the the task at hand and do not allow myself to
loose from it. My strong point is that I am always willing to learn new things, which I believe will
help me perform better in the job I may be given. Currently, soaking up as much knowledge and
practice as I can in an attempt to perfect my craft and eager to learn. I have experience using
JavaScript, jQuery, NET 4.5 C# programming language, CSS, HTML, APIs architecture, Entity
Framework Object-oriented design patterns, SQL, ASP.NET MVC, Modern SDLC approaches,
UI/UX, Coding, Google Cloud Platform .

     <SectionText>

     </SectionText>
     <Button onclick={() => window.Location = 'https.//google.com'}>Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;