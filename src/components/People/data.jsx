import React from 'react';
import Prasoon from '../../assets/Prasoon.jpg';
import Garima from '../../assets/Garima.jpg';
import Kanika from '../../assets/Kanika.jpg';
import Shivam from '../../assets/Shivam.jpg';
import Samridhi from '../../assets/Samridhi.jpg';
import Aadarsh from '../../assets/aadi.jpg'
import Akshat from '../../assets/Akshat.jpg'
import Dikshitsuthar from '../../assets/Dikshitsuthar.png'

export const CombinedData = [
  {
    id: 1,
    name: 'Prasoon Pandey',
    instagram: 'https://www.instagram.com/casual_insurgent/',
    linkedin: 'https://www.linkedin.com/in/the-prasoon-pandey/',
    image_url: Prasoon,
    role: 'Overall Head',
  },
  {
    id: 2,
    name: 'Shivam Sharma',
    instagram: 'https://www.instagram.com/shivamsharma_2004?igsh=eHBkZ3Jta215d2Vp&utm_source=qr',
    linkedin: 'https://www.linkedin.com/in/shivam-sharma-3465b9290/',
    image_url: Shivam,
    role: 'Finance Head',
  },
  {
    id: 3,
    name: 'Garima Upadhyay',
    instagram: 'https://www.instagram.com/gtg_047?igsh=MnB2Y3h1MXltNGQw',
    linkedin: 'https://www.linkedin.com/in/garima-upadhyay-783450262',
    image_url: Garima,
    role: 'Analytics Head',
  },
  {
    id: 4,
    name: 'Kanika Upadhyay',
    instagram: 'https://www.instagram.com/not_kanika_upadhyay?igsh=MXM2Y2E2bWlxMGdsbQ==',
    linkedin: 'https://www.linkedin.com/in/kanika-upadhyay-92208025b/',
    image_url: Kanika,
    role: 'Consulting Co-head',
  },
  {
    id: 5,
    name: 'Samridhi',
    instagram: 'https://www.instagram.com/_samridhiii_._24?igsh=MW16enJwYXNzcGx5ZA==',
    linkedin: 'https://www.linkedin.com/in/samridhi-3328762ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image_url: Samridhi,
    role: 'Design Head',
  },
  {
    id: 6,
    name: '',
    instagram: 'https://www.instagram.com/casual_insurgent/',
    linkedin: 'https://www.linkedin.com/in/the-prasoon-pandey/',
    
    role: 'Outreach Head',
  },
  {
    id: 7,
    name: 'Aadarsh Ranjan',
    instagram: 'https://www.instagram.com/solanki_aadarsh_/',
    linkedin: 'https://www.linkedin.com/in/aadarsh-ranjan-552080260/',
    image_url: Aadarsh,
    role: 'WebDev',
  },
  {
    id: 8,
    name: 'Akshat Sharma',
    instagram: '',
    linkedin: 'https://www.linkedin.com/in/akshat7/',
    image_url: Akshat,
    role: 'WebDev',
  },
  {
    id: 9,
    name: 'Dikshit Suthar',
    instagram: 'https://www.instagram.com/dikshit_suthar_57/',
    linkedin: 'https://www.linkedin.com/in/dikshit-suthar-289459250/',
    image_url: Dikshitsuthar,
    role: 'WebDev',
  },
  {
  id: 10,
  name: '',
  instagram: '',
  linkedin: '',
  
  role: 'WebDev',
},
];

export const OverallHead = CombinedData.filter(member => member.role === 'Overall Head');
export const FinanceHead = CombinedData.filter(member => member.role === 'Finance Head');
export const AnalyticsHead = CombinedData.filter(member => member.role === 'Analytics Head');
export const ConsultingCoHead = CombinedData.filter(member => member.role === 'Consulting Co-head');
export const DesignHead = CombinedData.filter(member => member.role === 'Design Head');
export const OutreachHead = CombinedData.filter(member => member.role === 'Outreach Head');
export const WebTeam = CombinedData.filter(member => member.role === 'WebDev');
