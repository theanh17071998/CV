import React from 'react';
import CV from 'react-cv';
import vi from './images/vi.png'
import en from './images/en.png'
import ja from './images/ja.png'
import './App.scss'
import { useTranslation } from 'react-i18next';

function App() {
  const [t, i18n] = useTranslation('common');
  return (
    <div className="App">
      <div className="group-btn">
        <button onClick={() => i18n.changeLanguage('vi')}>
          <img src={vi} alt="Logo" />
        </button>
        <button onClick={() => i18n.changeLanguage('en')}>
          <img src={en} className='en' alt="Logo" />
        </button>
        <button onClick={() => i18n.changeLanguage('ja')}>
          <img src={ja} alt="Logo" />
        </button>
      </div>
      <CV
        personalData={{
          name: t('header.name'),
          title: t('header.job'),
          image: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/116923100_947202109080861_8318122350328170355_n.png?_nc_cat=111&_nc_sid=b96e70&_nc_ohc=B0vagB8e-3kAX981vjU&_nc_ht=scontent-hkt1-1.xx&oh=f54a3e58bccc71831e7b16ea87e86592&oe=5F4F7147',
          contacts: [
            { type: 'email', value: 'nguyentheanh17071998@gmail.com' },
            { type: 'phone', value: '+84 387870022' },
            { type: 'location', value: t('header.location') },
            { type: 'website', value: 'mycv-28914.web.app/' },
            { type: '<i class="fab fa-facebook-f"></i>', value: 'facebook.com/theanh17798' },
            { type: 'github', value: 'github.com/theanh17071998' }
          ]
        }}
        sections={[
          {
            type: 'common-list',
            title: t('body.edu.education'),
            icon: 'graduation',
            items: [
              {
                title: t('body.edu.university'),
                authority: t('body.edu.majors'),
                rightSide: t('body.edu.time'),
                description: t('body.edu.year'),
              }
            ],
          },
          {
            type: 'common-list',
            title: t('body.ex.experinece'),
            icon: 'archive',
            items: [
              {
                title: t('body.ex.company'),
                authority: t('body.ex.position'),
                description: t('body.ex.job'),
                rightSide: t('body.ex.time')
              }
            ]
          },
          {
            type: 'common-list',
            title: t('body.ac.action'),
            icon: 'cubes',
            items: [
              {
                title: t('body.ac.hr.name'),
                authority: t('body.ac.hr.position'),
                description: t('body.ac.hr.job'),
                rightSide: t('body.ac.hr.time')
              },
              {
                title: t('body.ac.ja.name'),
                authority: t('body.ac.hr.position'),
                description: t('body.ac.hr.job'),
                rightSide: t('body.ac.hr.time')
              },
              {
                title: t('body.ac.monitor.name'),
                authority: t('body.ac.monitor.job'),
                rightSide: t('body.ac.monitor.time')
              }

            ]
          },
          {
            type: 'common-list',
            title: t('body.pri.prize'),
            icon: 'book',
            items: [
              {
                title: t('body.pri.5-good.name'),
                authority: t('body.pri.5-good.organization'),
                rightSide: t('body.pri.5-good.time'),
              },
              {
                title: t('body.pri.collective.name'),
                authority: t('body.pri.collective.organization'),
                rightSide: t('body.pri.collective.time'),
              }
            ]
          },
          {
            type: 'common-list',
            title: t('body.product.name'),
            icon: 'cubes',
            items: [
              {
                title: t('body.product.kanji45.name'),
                description: t('body.product.kanji45.application'),
                authority: t('body.product.kanji45.pr'),
                authorityWebSite: 'https://docs.google.com/presentation/d/13U7RX9spTeHGdV2cHhX1kH5yYP7yX63KmHRONrfuaEs/edit#slide=id.p',
                rightSide: t('body.product.kanji45.time')
              },
              {
                title: t('body.product.old-book.name'),
                description: t('body.product.old-book.application'),
                authority: t('body.product.old-book.pr'),
                authorityWebSite: 'https://ta-books.herokuapp.com/books',
                rightSide: t('body.product.old-book.time')
              },
              {
                title: t('body.product.memrise.name'),
                description: t('body.product.memrise.application'),
                authority: t('body.product.memrise.pr'),
                authorityWebSite: 'https://docs.google.com/presentation/d/1PgeHqfhCvZIxU58os5oRp7fNVGiQog9joECGWmB5vK8/edit#slide=id.g8cd070425e_0_114',
                rightSide: t('body.product.memrise.time'),
              }
            ]
          }
        ]}
        branding={false} // or false to hide it.
      />
    </div>
  );
}

export default App;   
