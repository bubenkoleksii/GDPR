import React, { useState } from 'react';
import Cookies from 'js-cookie';

function Popup() {
  const [isOpen, setIsOpen] = useState(!getCurrentRights() && getCurrentRights() !== '');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const rights = [
    {
      title: "Право на інформацію",
      name: "information",
      isChecked: true,
      description: "Суб'єкт має право бути повідомленим про те, які персональні дані збираються, як вони будуть використовуватися, кому можуть бути передані та про будь-які інші збори, які можуть впливати на його права."
    },
    {
      title: "Право на доступ",
      name: "access",
      isChecked: true,
      description: "Суб'єкт має право отримати доступ до своїх персональних даних, які збираються та обробляються."
    },
    {
      title: "Право на видалення (забуття)",
      name: "erasure",
      isChecked: true,
      description: "Суб'єкт має право вимагати видалення своїх персональних даних в певних обставинах, наприклад, якщо ці дані більше не потрібні для зазначених цілей."
    },
    {
      title: "Право на виправлення",
      name: "rectification",
      isChecked: true,
      description: "Суб'єкт має право на виправлення неправильних або неповних персональних даних."
    },
    {
      title: "Право на обмеження обробки",
      name: "processing",
      isChecked: true,
      description: "Суб'єкт має право вимагати обмеження обробки своїх персональних даних в певних обставинах, наприклад, якщо точність даних спірна."
    },
    {
      title: "Право на переносимість даних",
      name: "portability",
      isChecked: true,
      description: "Суб'єкт має право на отримання своїх персональних даних у структурованому, загальнорозповсюджуваному форматі та передавати ці дані іншому контролюючому суб'єкту."
    },
    {
      title: "Право на скаргу",
      name: "complaint",
      isChecked: false,
      description: "Суб'єкт має право на подання скарги до наглядового органу щодо обробки своїх персональних даних."
    },
    {
      title: "Право на заперечення",
      name: "denial",
      isChecked: false,
      description: "Суб'єкт має право в будь-який момент заперечувати проти обробки своїх персональних даних для деяких видів діяльності, таких як маркетинг."
    },
  ];
  
  const allRights = [];
  rights.map(item => {
    if (item.isChecked)
      allRights.push(item.name);
  })
  
  const defaultRights = [];
  rights.map(item => {
    if (item.isChecked)
      defaultRights.push(item.name);
  });
  
  const [checked, setChecked] = useState(defaultRights);
  
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    
    setChecked(newChecked);
  };
  
  function handleClose(isSettings = false, isAllTrue = true) {
    setIsOpen(false);
    
    setRights(isSettings, isAllTrue);
  }
  
  function handleSettings() {
    setIsSettingsOpen(!isSettingsOpen);
  }
  
  function setRights(isSettings = false, isAllTrue = true) {
    if (isSettings) {
      Cookies.set('rights', checked.join(' '));
    } else {
      isAllTrue ? Cookies.set('rights', allRights.join(' ')) : Cookies.set('rights', '');
    }
  }
  
  function getCurrentRights() {
    return Cookies.get('rights');
  }
  
  return (
    <div className={`popup-container ${isOpen ? 'open' : ''}`}>
      <div className="popup">
        <p className="title">
          <img className="mr-20" src="https://shellyssweetshoppe.com/wp-content/uploads/2017/09/cookieplaceholder.png" width={50}/>
          Цей сайт використовує cookie
        </p>
        
        <p>Ми та деякі треті сторони використовуємо файли cookie для статистичних та маркетингових цілей,
          зокрема для персоналізованої реклами та аналізу веб трафіку.
          <a target="_blank" href="https://weirdorconfusing.com/privacy/" className="ml-10">Більше інформації про умови приватності</a>
        </p>
        
        <p>Щоб дати згоду, натисніть кнопку «Прийняти»,
          або натиснувши кнопку "Керувати" виберіть, які файли cookie ви хочете приймати.
          Скористайтеся кнопкою «Відхилити», щоб продовжити без прийняття.
          Ви можете змінити налаштування файлів cookie в будь-який час, видаливши їх.
        </p>
        
        <div className="d-flex center-15">
          <button className="bg-orange" onClick={handleSettings}>Налаштувати</button>
          <button className="bg-red" onClick={() => handleClose(false, false)}>Відхилити</button>
          <button className="bg-green" onClick={() => handleClose(false, true)}>Прийняти</button>
        </div>
        
        <div className={`mt-25 ${isSettingsOpen ? 'd-block' : 'd-none'}`}>
          <p className="title">Налаштування cookie</p>
  
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {rights.map((item) => {
              const labelId = `checkbox-list-label-${item.name}`;
      
              return (
                <li style={{textAlign: 'left', padding: 5}} id={labelId} key={item.name}>
                  <input
                    type="checkbox"
                    checked={checked.indexOf(item.name) !== -1}
                    onChange={handleToggle(item.name)}
                    style={{ marginRight: 8 }}
                  />
                  
                  <label htmlFor={labelId} style={{ flexGrow: 1, fontWeight: 'bolder', fontSize: 16 }}>
                    {item.title}
                  </label>
                  
                  <p style={{fontSize: 12}}>{item.description}</p>
                </li>
              );
            })}
          </ul>
          
          <button className="bg-green" onClick={() => handleClose(true, null)}>Зберегти налаштування cookie і прийняти</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;