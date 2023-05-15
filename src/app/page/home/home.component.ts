import { Component } from '@angular/core';
import { Services } from 'src/app/interfaces/services';
import { Summary } from 'src/app/interfaces/summary';
import { Town } from 'src/app/interfaces/town';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  service: Services = {
    image: '../assets/img/icon/web-design.png',
    headTitle: 'Web Design',
    title: "Qualified web designs and attractive effects which catches visitor's eye.",
    urlName: 'Learn More'
  };

  services: Services[] = [
    {
      image: '../assets/img/icon/web-design.png',
      headTitle: 'Web Design',
      title: "Qualified web designs and attractive effects which catches visitor's eye.",
      urlName: 'Learn More'
    },
    {
      image: '../assets/img/icon/web-development.png',
      headTitle: 'Web Development',
      title: "Clean and fresh issue free code to make your website dynamic perfectly.",
      urlName: 'Learn More'
    },
    {
      image: '../assets/img/icon/responsive.png',
      headTitle: 'Responsive Design',
      title: "Responsive Design which will be working almost all browsers and screens,etc",
      urlName: 'Learn More'
    },
    {
      image: '../assets/img/icon/landing-page.png',
      headTitle: 'Landing Page Design',
      title: "I'll make landing page for you with beautifull design and also 6 to 8 section.",
      urlName: 'Learn More'
    },
    {
      image: '../assets/img/icon/wordpress.png',
      headTitle: 'Wordpress',
      title: "Wordpress, Magento, E-Commerce,Development & Customization.",
      urlName: 'Learn More'
    },
    {
      image: '../assets/img/icon/psd.png',
      headTitle: 'Graphic Design',
      title: "Qualified graphic designs and attractive effects which catches visitor's eye.",
      urlName: 'Learn More'
    }
  ];
  summary: Summary = {
    eduYears: "2022 - 2023",
    eduCourse: 'Computer Basic Course',
    eduTitle: 'Samadhan Keshabpur',
    eduInfo: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
  };

  summaryFirst: Summary[] = [
    {
      eduYears: "2022 - 2023",
      eduCourse: 'Computer Basic Course',
      eduTitle: 'Samadhan Keshabpur',
      eduInfo: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
    },
    {
      eduYears: "2018 - 2019",
      eduCourse: 'Junior School Certificate',
      eduTitle: 'Keshabpur Pilot School',
      eduInfo: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
    },
    {
      eduYears: "2022 - 2023",
      eduCourse: 'Secondary School Certificate',
      eduTitle: 'Keshabpu Pilot School And Collage',
      eduInfo: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
    }
  ];

  summarySecond: Summary[] = [
    {
      eduYears: "2023",
      eduCourse: 'Web Developer',
      eduTitle: 'Softlab IT',
      eduInfo: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
    },
    {
      eduYears: "2022 - 2023",
      eduCourse: 'Logo Designer',
      eduTitle: 'Canva',
      eduInfo: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
    },
    {
      eduYears: "2022 - 2023",
      eduCourse: 'Facebook Marketing',
      eduTitle: 'YouTube',
      eduInfo: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
    }
  ];
  townBox: Town[] = [
    {
      imageSrc: "../assets/img/town/1.jpeg",
      townHead: 'Jeshore',
      townTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit quibusdam, alias ratione inventore corrupti?',
      urlName: 'More',
    },
    {
      imageSrc: "../assets/img/town/2.jpeg",
      townHead: 'Jeshore',
      townTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit quibusdam, alias ratione inventore corrupti?',
      urlName: 'More',
    },
    {
      imageSrc: "../assets/img/town/3.jpeg",
      townHead: 'Jeshore',
      townTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit quibusdam, alias ratione inventore corrupti?',
      urlName: 'More',
    },
    {
      imageSrc: "../assets/img/town/4.jpg",
      townHead: 'Jeshore',
      townTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit quibusdam, alias ratione inventore corrupti?',
      urlName: 'More',
    },
    {
      imageSrc: "../assets/img/town/5.jpeg",
      townHead: 'Jeshore',
      townTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit quibusdam, alias ratione inventore corrupti?',
      urlName: 'More',
    },
    {
      imageSrc: "../assets/img/town/6.jpeg",
      townHead: 'Jeshore',
      townTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit quibusdam, alias ratione inventore corrupti?',
      urlName: 'More',
    }
  ];
}
