import { useState } from 'react';

const crossSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      stroke="#33363F"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="#33363F"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

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
          {crossSvg}
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
      <div>
        <button
          className="newaccount_cancel_button"
          onClick={cancelClickHandler}
        >
          <p className="newaccount_cancel_button_text">Vazgeç</p>
        </button>
        <button className="newaccount_save_button" onClick={saveClickHandler}>
          <p className="newaccount_save_button_text">Kaydet</p>
        </button>
      </div>
    </div>
  );
};

export default AddNewAccount;
