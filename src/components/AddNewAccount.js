import { useState } from 'react';
import { cross_svg } from '../assets/svgFiles';
import './AddNewAccount.css';

const AddNewAccount = ({ changeState }) => {
  const [socialMediaLink, setSocialMediaLink] = useState('');
  const [socialMediaName, setSocialMediaName] = useState('');
  const [description, setDescription] = useState('');

  //Kullanıcı veri girmekten vazgeçtiğinde , Vazgeç butonuna tıklaması ile bu kapatma fonksiyonu çağırılıyor.
  function cancelClickHandler() {
    setSocialMediaLink('');
    setSocialMediaName('');
    setDescription('');
    changeState(false);
  }

  //Kaydet butonuna basılması ile saveClickHandler() fonksiyonu çağırılıyor. Eğer boş girdi kaydedilmeye
  //çalışılıyorsa alert ile ikaz veriyor, değilse localStorage a kaydediyor.
  function saveClickHandler() {
    if (socialMediaLink === '' && socialMediaName === '') {
      alert('Sosyal Medya Linki ve Sosyal Medya Adının ikisi de boş olamaz!');
      return;
    }
    let itemsArray = localStorage.getItem('items')
      ? JSON.parse(localStorage.getItem('items'))
      : [];
    itemsArray.push({
      socialMediaLink: socialMediaLink,
      socialMediaName: socialMediaName,
      description: description,
    });
    localStorage.setItem('items', JSON.stringify(itemsArray));
    cancelClickHandler();
  }

  return (
    <div className="newaccount_box">
      <div className="newaccount_top">
        <div className="close_round" onClick={cancelClickHandler}>
          {cross_svg}
        </div>
      </div>

      <form>
        <div>
          <label className="newaccount_label" htmlFor="link">
            Sosyal Medya Linki
          </label>
          <input
            className="social_input"
            type="text"
            id="link"
            value={socialMediaLink}
            onChange={(e) => setSocialMediaLink(e.target.value)}
          />
        </div>
        <div>
          <label className="newaccount_label" htmlFor="name">
            Sosyal Medya Adı
          </label>
          <input
            className="social_input"
            type="text"
            id="name"
            value={socialMediaName}
            onChange={(e) => setSocialMediaName(e.target.value)}
          />
        </div>
        <div>
          <label className="newaccount_label" htmlFor="description">
            Açıklama
          </label>
          <input
            className="social_input"
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </form>
      <div className="newaccount_buttongroup">
        <button
          className="newaccount_cancel_button"
          onClick={cancelClickHandler}
        >
          Vazgeç
        </button>
        <button className="newaccount_save_button" onClick={saveClickHandler}>
          Kaydet
        </button>
      </div>
    </div>
  );
};

export default AddNewAccount;
