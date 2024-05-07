import { ReactNode } from 'react';

import classNames from 'classnames';

import Button from '~components/Button/Button';
import Modal from '~components/Modal/Modal';

import scss from './SocialMediaList.module.scss';

import { SocialMediaFormProps } from './SocialMediaForm.types';

function SocialMediaForm({
  isOpen,
  setIsOpen,
  ...props
}: SocialMediaFormProps): ReactNode {
  // const [selectSocialMedia, setSelectSocialMedia] = useState(
  //   'Selecione uma rede social'
  // )

  return (
    <Modal
      footer={
        <Button disabled={false} type="button" variant="container">
          any_text
        </Button>
      }
      isOpen={isOpen}
      onClickOutside={() => setIsOpen(false)}
      title="selecione sua rede social"
    >
      <form className={classNames(scss.form)} {...props}>
        {/* <select
          className={scss.selection}
          onChange={(e) => setSelectSocialMedia(e.target.value)}
          value={selectSocialMedia}
        >
          <option className={scss.optionSocial}>{selectSocialMedia}</option>
          <option className={scss.optionSocial} value="twitter">
            Twitter
          </option>
          <option className={scss.optionSocial} value="instagram">
            Instagram
          </option>
          <option className={scss.optionSocial} value="facebook">
            Facebook
          </option>
        </select> */}
        <ul className={scss.selection}>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>Youtube</li>
          <li>Facebook</li>
        </ul>
      </form>
    </Modal>
  );
}

export default SocialMediaForm;
