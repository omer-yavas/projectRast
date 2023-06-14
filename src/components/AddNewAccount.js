import { useState } from 'react';
import { cross_svg } from '../assets/svgFiles';

const AddNewAccount = ({ changeState }) => {
  const [socialMediaLink, setSocialMediaLink] = useState('');
  const [socialMediaName, setSocialMediaName] = useState('');
  const [description, setDescription] = useState('');

  function cancelClickHandler() {
    setSocialMediaLink('');
    setSocialMediaName('');
    setDescription('');
    changeState(false);
  }

  function saveClickHandler() {
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
