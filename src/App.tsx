import './App.css'
import Navbar from "./components/navbar";
import FormSection from './components/PageContent';
import FooterSection from './components/footer';
import { Button } from '@/components/shared/ui/button';
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { LandingProductTourSection, LandingProductTourList, LandingProductTourTrigger, LandingProductTourContent } from '@/components/landing/LandingProductTour';
import Image from '@/components/shared/Image';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';
import { LandingTestimonialListSection } from '@/components/landing/testimonial/LandingTestimonialList';
import vid from '@/components/PageContent/vid.mp4'



function App() {


  
  const testimonialItems = [
  {
    name: 'Louis Vuitton',
    text: 'Grâce à iSpeakAnglo, j\'ai pu améliorer ma confiance en moi lors de réunions professionnelles. Les cours sont interactifs et m\'ont aidé à m\'exprimer plus facilement dans des situations complexes.',
    handle: '@LouisVuittonFashion',
    imageSrc: 'https://picsum.photos/100/100.webp?random=1',
    featured: true, // Feature this testimonial
    url: 'https://fr.louisvuitton.com/fra-fr/homepage', // Link the testimonial
  },
  {
    name: 'Thomas B., Consultant en Stratégie',
    text: 'Les cours m\'ont vraiment permis de perfectionner mon écriture en anglais, surtout pour les e-mails professionnels. Je me sens désormais beaucoup plus à l\'aise pour rédiger des rapports et des présentations.',
    handle: '@ThomasB',
    imageSrc: 'https://picsum.photos/100/100.webp?random=2',
    size: 'half',
    url: 'https://example.com',
  },
  {
    name: 'Fatima',
    text: 'Ma prononciation s\'est nettement améliorée, et je comprends mieux les accents différents',
    handle: '@FatiEs',
    imageSrc: 'https://picsum.photos/100/100.webp?random=3',
    size: 'half',
  },
  {
    name: 'Mandy',
    text: 'Une méthode d\'enseignement innovante qui m\'a permis de progresser rapidement.',
    handle: '@mandy',
    imageSrc: 'https://picsum.photos/100/100.webp?random=4',
    size: 'third',
  },
  {
    name: 'Alex',
    text: 'Les professeurs sont très professionnels et à l\'écoute. Je recommande vivement !',
    handle: '@alex',
    imageSrc: 'https://picsum.photos/100/100.webp?random=5',
    featured: true,
    size: 'third',
  },
  { 
    name: 'Hamid',
    text: 'C\'est super! Je peux maintenant parler à mes amis dans une langue qu\'ils ne comprennent pas !',
    handle: '@hamidtheboss',
    imageSrc: 'https://picsum.photos/100/100.webp?random=9',
    url: 'https://youtu.be/dQw4w9WgXcQ',
    size: 'third',
  },
]
const l_title = "Apprenez l'anglais avec iSpeakAnglo"

  return (


    <>
    
  <Navbar />

{/** IMAGE */}
<section id='home'>
<LandingPrimaryImageCtaSection 
  
  title={l_title}
  description="Envie de parler anglais avec assurance ? Chez iSpeakAnglo, nous transformons vos ambitions en compétences concrètes grâce à des cours interactifs et motivants, adaptés à tous les niveaux. "
  imageSrc="https://i.ibb.co/Sc1jLMh/english-Class.webp"
  imageAlt="Sample image"
  imageShadow='hard'
>

  <Button size="xl" asChild>
    <a href="#reserver">Commencez dès maintenant !</a>
  </Button>

  <Button size="xl" variant="outlinePrimary">
    <a href="#avantages">En savoir plus</a>
  </Button>

  <LandingSocialProof
    className="mt-6 w-full flex justify-center"
    showRating
    numberOfUsers={99}
    avatarItems={[
      {
        imageSrc: 'https://picsum.photos/id/64/100/100',
        name: 'Elon Musk',
      },
      {
        imageSrc: 'https://picsum.photos/id/65/100/100',
        name: 'Jeff Bezos',
      },
      {
        imageSrc: 'https://picsum.photos/id/669/100/100',
        name: 'Louis Vuitton',
      },
    ]}
  />

</LandingPrimaryImageCtaSection>
</section>
{/** #################### IMAGE ####################### */}

{/** VIDEO  */}

<section id="about">
<LandingProductVideoFeature
  withBackgroundGlow
  videoPosition='left'
  backgroundGlowVariant="primary"
  variant='primary'
  title="Pourquoi nous ?"
  textPosition='center'
  
  autoPlay={false}
  controls={false}
  videoSrc={vid}
  descriptionComponent={
    
    <>
    
      <LandingProductFeatureKeyPoints
        keyPoints={[
          {
            title: 'Des enseignants experts',
            description: 'Apprenez avec des professionnels passionnés qui vous guideront pas à pas.',
          },
          {
            title: 'Méthodes modernes',
            description: 'Des techniques innovantes et des outils interactifs pour un apprentissage efficace.',
          },
          {
            title: 'Horaires flexibles',
            description: 'Étudiez à votre rythme, où que vous soyez.',
          },
        ]}
      />
    </>
  }
/>
</section>

{/** #################### VIDEO #################### **/}

{/** 3 PICTURES  **/}
<section id="avantages">
<LandingProductTourSection
  title='Ce que vous allez maîtriser '
  description="Ne manquez pas l’occasion de découvrir nos cours et d’investir dans votre avenir. Avec iSpeakAnglo, c’est le moment de faire de l’anglais votre meilleur atout."
  defaultValue="feature-1"
>

  <LandingProductTourList>
    <LandingProductTourTrigger value="feature-1">
      <p className="text-xl font-bold">
      Conversations fluides dans un contexte professionnel et quotidien.
      </p>
      <p>
      Apprenez à vous exprimer avec aisance dans des situations réelles, que ce soit pour des réunions de travail, des voyages, ou des interactions sociales. Développez votre vocabulaire et gagnez en confiance pour chaque conversation.
      </p>
    </LandingProductTourTrigger>

    <LandingProductTourTrigger value="feature-2">
      <p className="text-xl font-bold">
      Techniques d’écriture pour des e-mails et documents impeccables.
      </p>

      <p >
      Maîtrisez l’art de rédiger des e-mails professionnels, des lettres, et des rapports clairs et impactants.
      Découvrez des astuces pour structurer vos idées et éviter les erreurs courantes.</p>
      
    </LandingProductTourTrigger>

    <LandingProductTourTrigger value="feature-3">
      <p className="text-xl font-bold">
      Amélioration de la prononciation et de la compréhension orale.
      </p>
      <p>
      Perfectionnez votre accent et apprenez à comprendre différentes tonalités et accents en anglais grâce à des exercices pratiques et des dialogues interactifs.
      </p>
    </LandingProductTourTrigger>

    <LandingProductTourTrigger value="feature-4">
      <p className="text-xl font-bold">
      Préparation aux tests de certification en anglais (TOEFL, IELTS, etc.)
      </p>
      <p>
      Bénéficiez d’une préparation ciblée pour les tests de certification les plus reconnus. Que ce soit pour une inscription universitaire, un visa ou un projet professionnel, nous vous fournissons les outils et techniques nécessaires pour réussir avec brio. Améliorez votre score en travaillant sur la compréhension, l'expression orale et écrite, ainsi que la gestion du temps pendant l'examen.
      </p>
    </LandingProductTourTrigger>

    
  </LandingProductTourList>
  <LandingProductTourContent value="feature-1" className="picLP">
    <Image  src="https://i.imghippo.com/files/QJT2211bLw.webp" width={900} height={900} />
  </LandingProductTourContent>
  <LandingProductTourContent value="feature-2" className="picLP">
    <Image  src="https://i.imghippo.com/files/el5245bU.webp" width={900} height={900} />
  </LandingProductTourContent>
  <LandingProductTourContent value="feature-3" className="picLP">
    <Image  src="https://i.imghippo.com/files/RWD3758EVY.png" width={900} height={900} />
  </LandingProductTourContent>
  <LandingProductTourContent value="feature-4" className="picLP">
    <Image  src="https://i.imghippo.com/files/M2850onE.webp" width={900} height={900} />
  </LandingProductTourContent>
 
</LandingProductTourSection>
</section>
{/** #################### 3 PICTURES  ####################  **/}


{/**  TESTIMONIAL  */}

<section id="fierte">
<LandingTestimonialReadMoreWrapper size="md" >
<LandingTestimonialListSection
    withBackgroundGlow
    backgroundGlowVariant="primary"
    title="Nos étudiants en parlent mieux que nous."
    description="Découvrez ce que nos élèves disent de leur expérience avec iSpeakAnglo."
    // @ts-ignore
    testimonialItems={testimonialItems}
  />
</LandingTestimonialReadMoreWrapper>
</section>
{ /** #################### TESTIMONIAL  #################### */}


<section id="reserver">
<FormSection />
</section>

<FooterSection />

    </>
  )
}

export default App
