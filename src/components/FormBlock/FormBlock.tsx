import { ChangeEvent, FC, FormEvent, useState } from "react";
import "./FormBlock.css";
import { PopupForm } from "../Popups/PopupWholesale";

interface FormBlockProps {
  names: string[];
}

export const FormBlock: FC<FormBlockProps> = ({ names }) => {
  const [isPopupOpened, setIsPopupOpened] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: names,
    attending: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsPopupOpened(true);
    console.log({ ...formData });
  };

  return (
    <div className="form-block">
      <div className="form-block__container">
        <form onSubmit={handleSubmit} className="form-block__form">
          <div className="form-block__field">
            <label>Планируете ли Вы присутствовать на свадьбе?</label>
            <div className="form-block__options">
              <label>
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === "yes"}
                  onChange={handleChange}
                  required
                />
                Да, с удовольствием!
              </label>
              <label>
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  className="form-block__input"
                  checked={formData.attending === "no"}
                  onChange={handleChange}
                  required
                />
                К сожалению, не могу
              </label>
            </div>
          </div>
          <button type="submit" className="form-block__submit">
            Отправить!
          </button>
        </form>
      </div>
      <PopupForm isOpened={isPopupOpened} setIsOpened={setIsPopupOpened} />
    </div>
  );
};
