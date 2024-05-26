/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FC, FormEvent, useState } from "react";
import "./FormBlock.css";
import { PopupForm } from "../Popups/PopupWholesale";
import { fetchSendEmail } from "../../api/mailer";

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
    fetchSendEmail({ email: names.join(","), text: `имя: ${formData.name}, приглашение: ${formData.attending}` })
      .then((response: any) => {
        console.log("Email sent successfully:", response);
        setIsPopupOpened(true);
      })
      .catch((error: any) => {
        console.error("Error sending email:", error);
      });
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
