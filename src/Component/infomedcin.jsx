import React from 'react';
import doc1 from "../assets/doc1.png";
import doc2 from "../assets/doc2.png";
import doc3 from "../assets/doc9.png";
import doc4 from "../assets/doc11.png";
import doc5 from "../assets/doc12.png";
import doc6 from "../assets/doc13.png";
import doc7 from "../assets/doc14.png";
import doc8 from "../assets/doc15.png";
import doc10 from "../assets/12.avif"
import doc11 from "../assets/13.avif"
import doc12 from "../assets/14.avif"
import doc13 from "../assets/10avif.avif"

export const doctors = [
  {
    id: 1,
    name: 'Dr.Mohmed Amine ',
    specialization: 'Cardiologue',
    info: 'Diplômé en cardiologie interventionnelle : Université Paris Descartes france Diplômé de la faculté de médecine Marrakech Ancien médecin du centre de cardiologie interventionnelle Louis pasteur Nancy  France Ancien Médecin du CHU Amien Sud - France Ancien Interne du CHU marrakech et l’Hopital militaire Avicenne -Marrakech...',
    telephone: '+212 524 20 10 07' ,
    localisation:'https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d27174.295074862745!2d-7.999795000000001!3d31.639685!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDM4JzIyLjkiTiA3wrA1OSc1OS4zIlc!5e0!3m2!1sen!2sma!4v1732898096605!5m2!1sen!2sma',
    image: doc1,
},
{
    id: 2,
    name: 'Dr. Hind Nadim',
    specialization: 'Dentiste',
    info: 'Orthodontiste spécialiste en orthodontie de l’enfant et l’adulte Diplome universitaire de l’orthodontie de Paris Certifié Invisalign Master de l’orthodontie invisible',
    telephone: '+212 606 23 96 19' ,
    localisation:'https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d6792.484389682559!2d-8.003031175727665!3d31.65459297530166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d31.6506112!2d-8.0084992!4m3!3m2!1d31.6564166!2d-8.0040765!5e0!3m2!1sar!2sma!4v1732916715880!5m2!1sar!2sma',
    image: doc2,
},
{
    id: 3,
    name: 'Dr Mariam ZAKOUN',
    specialization: 'Ophtalmologue',
    info:'Spécialiste en ophtalmologie Diplômée de la faculté de médecine de Marrakech Diplôme de cornée Strasbourg Diplôme d’adaptation en lentilles de contact Paris Diplôme de chirurgie réfractive UAE',
    telephone:'+212 524 43 18 01',
    localisation:'https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d13586.659661081569!2d-7.996169083127266!3d31.643023801265493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d31.6506112!2d-8.0084992!4m3!3m2!1d31.633930399999997!2d-8.0023851!5e0!3m2!1sar!2sma!4v1732917239814!5m2!1sar!2sma',
    image: doc3,
},
{
    id: 4,
    name: 'Dr Bouchra LALAMI',
    specialization: 'Pneumologue',
    info:'Diplôme d’université D’immun allergologie chimique et professionnelle - Paris FRANCE Diplôme Universitaire de spécialité Pneumologie - Reims FRANCE Diplôme Universitaire de spécialité Allergologie et immunologie Cliniques - Reims FRANCE Formation Pathologie respiratoire du Sommeil...',
    telephone:'+212 524 43 23 20 ',
    localisation:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45010.46544836627!2d-7.613773000000001!3d33.58325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2bdc8adc98b%3A0xa83d84e240f5a362!2sEDICOM%20S.A!5e1!3m2!1sfr!2sma!4v1732918005154!5m2!1sfr!2sma',
    image: doc4,
},


{
    id: 6,
    name: 'Dr. fadoua iklim',
    specialization: 'Dentiste',
    info:'spécialisée dans divers services dentaires.Elle propose une gamme complète de soins, notamment en parodontologie, soins dentaires généraux, esthétique dentaire, chirurgie au laser, radiologie numérique, et plus encore.',
    telephone:'+212 539 97 29 48 ',
    localisation:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54344.60318598545!2d-8.083570278320316!3d31.646505899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafefe18a40edc3%3A0x47d7ad05f89cbccf!2sCabinet%20dentaire%20Dr%20fadoua%20iklimi%20marrakech!5e0!3m2!1sfr!2sma!4v1732919277018!5m2!1sfr!2sma',
    image: doc6,
},
{
    id: 7,
    name: 'Dr.Fadloulah Ahmed',
    specialization: 'Orthopédiste',
    info:'orthopédiste et traumatologue réputé exerçant à Marrakech, avec un cabinet situé à l’Hôpital Militaire Avicenne. Il est spécialisé dans la prise en charge des pathologies articulaires et musculaires, incluant des interventions comme l’arthroscopie, la chirurgie des ligaments croisés, et la gestion de l’arthrose...',
    telephone:'+212 656 59 48 42',
    localisation:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.862322939772!2d-8.011698625105156!3d31.637619774160513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef4484eb3c8d%3A0x69ac23cdf592a79a!2sDr%20FADLOULLAH%20Ahmed%20traumatologue-orthop%C3%A9diste!5e0!3m2!1sfr!2sma!4v1732921096932!5m2!1sfr!2sma',
    image: doc7,
},
{
    id: 8,
    name: 'Dr. El jazouli Intissar',
    specialization: 'Ophtalmologue',
    info:'ophtalmologue basée à Tanger, connue pour son expertise en chirurgie de l’œil, y compris la cataracte et le ptérygion avec greffe conjonctivale offre des consultations spécialisées dans un cadre moderne et bien équipé...',
    telephone:'+212 539 94 26 10',
    localisation:'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d192.2143507261927!2d-5.813754475142108!3d35.768184625919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQ2JzA0LjUiTiA1wrA0OCc0OC4wIlc!5e1!3m2!1sar!2sma!4v1732923688254!5m2!1sar!2sma',
    image: doc8,
},

{
    id: 9,
    name: 'Dr. Farid badri',
    specialization: 'Pneumologue',
    info:'pneumologue, allergologue et tabacologue  Il propose des services variés, notamment :Exploration fonctionnelle respiratoire,Polysomnographie,Bronchoscopie,Aide au sevrage tabagique,Gestion des allergies et des troubles respiratoires...',
    telephone:'+212 524 42 01 37',
    localisation:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0213270427685!2d-8.019094225726347!3d31.63326644155804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee9181ffd9f1%3A0xaf1ac9ac59d11b78!2sDr%20Farid%20BADRI%20Pneumologue%20Allergologue%20Tabacologue!5e0!3m2!1sen!2sma!4v1733009236994!5m2!1sen!2sma',
    image: doc10 ,
},
{
    id: 10,
    name: 'Dr. Abdoun mohmed said',
    specialization: 'Pneumologue',
    info:'pneumologue basé à Marrakech Il est spécialisé dans les maladies respiratoires et propose des consultations pour divers troubles pulmonaires...',
    telephone:'+212 524 29 29 30 ',
    localisation:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.5073357482593!2d-8.005531025725706!3d31.647336940860598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8082f308c9%3A0x61fb7774a4238dc8!2sDr.ABDOUN%20Pneumologue%20Allergologue!5e0!3m2!1sen!2sma!4v1733009331210!5m2!1sen!2sma',
    image: doc11,
},
{
    id: 11,
    name: 'Dr. Chachi Abderrazaq',
    specialization: 'Cardiologue',
    info:'spécialisé dans le diagnostic et le traitement des pathologies cardiovasculaires propose divers services liés à la cardiologie, notamment des consultations pour des douleurs thoraciques, des arythmies et d’autres affections cardiaques...',
    telephone:'+212 525 97 76 87 ',
    localisation:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.541365851961!2d-8.013936925725707!3d31.646405540906734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8a86ac21b732a631%3A0x2528d01f06b8f3f0!2sCabinet%20de%20Cardiologie%20Dr%20CHACHI%20Abderrazaq!5e0!3m2!1sen!2sma!4v1733009437946!5m2!1sen!2sma',
    image: doc12,
},
{
    id: 12,
    name: 'Dr. Youness bouziani',
    specialization: 'Ophthalmologue',
    info:'Il offre divers services ophtalmologiques, notamment le traitement des maladies rétiniennes, la chirurgie de la cataracte, la gestion du glaucome, et des interventions réfractives..',
    telephone:'+212 524 30 49 62 ',
    localisation:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.7807678701165!2d-8.025706025726034!3d31.639852441231497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee82b24850b1%3A0x1e13e1af5475339f!2sOPHTALMOLOGUE%20Dr%20Youness%20BOUZIANI%20(Boussol%20eye%20center))!5e0!3m2!1sen!2sma!4v1733009510712!5m2!1sen!2sma',
    image: doc5,
},
{
    id: 13,
    name: 'Dr. Youness bouziani',
    specialization: 'Médecine familiale',
    info:'Il offre divers services ophtalmologiques, notamment le traitement des maladies rétiniennes, la chirurgie de la cataracte, la gestion du glaucome, et des interventions réfractives..',
    telephone:'+212 524 30 49 62 ',
    localisation:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.7807678701165!2d-8.025706025726034!3d31.639852441231497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee82b24850b1%3A0x1e13e1af5475339f!2sOPHTALMOLOGUE%20Dr%20Youness%20BOUZIANI%20(Boussol%20eye%20center))!5e0!3m2!1sen!2sma!4v1733009510712!5m2!1sen!2sma',
    image: doc5,
},



];