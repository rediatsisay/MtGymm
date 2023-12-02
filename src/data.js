// images
import Logo from '../src/assets/img/header/logo.svg';
import CommunityImg1 from '../src/assets/img/community/img1.png';
import CommunityImg2 from '../src/assets/img/community/img2.png';
import CommunityImg3 from '../src/assets/img/community/img3.png';
import CommunityImg4 from '../src/assets/img/community/img4.png';
import JoinImg from '../src/assets/img/join/woman.png';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';

import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

export const header = {
  logo: Logo,
  btnLoginText: ' ',
  btnSignupText: ' ',
};
export const nav = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Community', href: '/community' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Join', href: '/join' },
];


export const banner = {
  titlePart1: 'MT POWERED GYM',
  titlePart2: '– you fit here.',
  subtitle:
    'We provide serious fitness but within a fun and friendly, safe space.',
  textBtn: 'Join Now',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'About Team MT',
  subtitle1:
    'Welcome to MT Gym, your ultimate fitness destination nestled in the heart of Dire Dawa, around the vibrant neighborhood of Sabyan Seydo.We are not just a fitness center; we are a community dedicated to empowering individuals on their fitness journeys.' ,
    
  subtitle2:
    'The strength Our gym is equipped with state-of-the-art facilities, providing a dynamic and motivating environment for your workouts. Whether you are a seasoned fitness enthusiast or just starting your fitness journey, Our Team MT Gym offers a variety of programs and equipment tailored to meet your individual needs.',
  link: 'Join Now',
};

export const pricing = {
  icon: PriceIcn,
  title: 'Pricing plan',
  plans: [
    {
      name: 'Basic ',
      price: '1200',
      list: [
        { name: 'unlimited gym access' },
        { name: 'Aerobics  programs' },
        { name: 'free fitness consultation' },
      ],
      delay: 600,
    },
    {
      name: 'Premium',
      price: '5200',
      list: [
        { name: 'unlimited gym access' },
        { name: 'Aerobics  programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
      ],
      delay: 800,
    },
    {
      name: 'MT special',
      price: '6000',
      list: [
        { name: 'unlimited gym access' },
        { name: 'Aerobics  programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
        { name: '50% off drinks' },
      ],
      delay: 1000,
    },
  ],
};
export const community = {
  icon: CommunityIcn,
  title: 'Meet Our Expert Trainers',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Fitness Enthusiast',
      message: '“Passionate about transforming lives through Aerobics training.”',
    },
    {
      image: CommunityImg2,
      name: 'Music & Fitness Maestro',
      message: '“Combining the love for music and fitness to inspire healthier lifestyles.”',
    },
    {
      image: CommunityImg3,
      name: 'Wellness Specialist',
      message: '“Dedicated to promoting holistic well-being for a happier and healthier you.”',
    },
    {
      image: CommunityImg4,
      name: 'Fitness Consultant Extraordinaire',
      message: '“Bringing expertise and motivation to help you achieve your fitness goals.”',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'FAQ',
  accordions: [
    {
      question: 'How can I book a workout class?',
      answer:
'Approach the front desk or reception area of the gym. Staff at the front desk will provide information about available workout classes, schedules, and any requirements for booking .'    },
    {
      question: 'Can I pay by cash for my membership?',
      answer:
        '  Yes absolutely ,  we accept cash payments for memberships at our reception. If you prefer to pay in cash, simply visit our gym reception, and our friendly staff will assist you with the payment process ',
    },
    {
      question: 'What age do I need to be to join?',
      answer:

' we believe in fostering a diverse and inclusive fitness community. As for age requirements, we welcome members of all ages! Whether you are a fitness enthusiast in your teens or looking to maintain a healthy lifestyle in your golden years, there is a place for you at MT Gym'
    },
    {
      question: 'Are there any lockers?',
      answer:
'Yes ,We provides locker facilities for the convenience and security of our members. You can use the lockers to store your belongings while you focus on your workout.'
    },
    {
      question: 'How do I cancel my membership?',
      answer:
        ' To cancel your MT Gym membership, visit our reception during operating hours, fill out a cancellation form, review any associated terms, settle outstanding fees if applicable, and confirm your cancellation with our staff.',
    },
    {
      question: 'Is there water available at the gym?',
      answer:
        'provides water facilities to ensure our members stay hydrated during their workouts. We understand the importance of staying hydrated for optimal performance and overall well-being. You will find water stations conveniently located within the gym premises',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: 'Wanna join & have fun?',
  subtitle:
    'We’ll keep you updated on the things you need to know about MT. Nothing more, nothing less.',
  btnText: 'Join now',
};

export const footer = {
  logo: Logo,
  copyrightText: '  version 1.0   R. with Afronex 2023.',
};
