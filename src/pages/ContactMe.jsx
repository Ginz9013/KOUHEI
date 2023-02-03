/* eslint-disable react/react-in-jsx-scope */
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [validateStatus, setValidateStatus] = useState({
    name: true,
    email: true,
    subject: true,
    message: true,
  });

  const [submitting, setSubmitting] = useState(false);

  const [checkModal, setCheckModal] = useState(false);

  const sendEmail = () => {
    emailjs
      .send(
        "service_vxs7ird",
        "template_maieqjb",
        formData,
        "HAiSjn1ZBNhxS8PbZ"
      )
      .then(() => {
        // 彈跳視窗，顯示已寄信
        checkToggle();
        // 重置表單內容
        resetFormData();
      });
  };

  const validate = () => {
    // 驗證姓名
    if (!formData.name) {
      setValidateStatus((prev) => ({ ...prev, name: false }));
      return;
    } else {
      setValidateStatus((prev) => ({ ...prev, name: true }));
    }
    // 信箱驗證
    if (!formData.email) {
      setValidateStatus((prev) => ({ ...prev, email: false }));
      return;
    } else {
      setValidateStatus((prev) => ({ ...prev, email: true }));
    }
    // 驗證標題
    if (!formData.subject) {
      setValidateStatus((prev) => ({ ...prev, subject: false }));
      return;
    } else {
      setValidateStatus((prev) => ({ ...prev, subject: true }));
    }
    // 訊息驗證
    if (!formData.message) {
      setValidateStatus((prev) => ({ ...prev, message: false }));
      return;
    } else {
      setValidateStatus((prev) => ({ ...prev, message: true }));
    }

    // 確認全部都有填寫， 切換寄送狀態，並觸發寄信
    setSubmitting(true);
  };

  useEffect(() => {
    if (submitting) {
      sendEmail();
      setSubmitting(false);
    }
  }, [submitting]);

  const checkToggle = () => {
    setCheckModal((prev) => !prev);
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const submit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <div className="w-full h-full bg-secondary-black flex justify-center items-center">
      <div className="flex flex-col items-center w-5/6">
        <h1 className="text-white text-3xl mb-6">Contact Me</h1>
        <form className="text-white w-5/6 md:w-2/3 xl:w-1/2">
          <div className="flex mx-4 my-8">
            {/* Name */}
            <div className="relative bg-secondary-black mr-4">
              <input
                type="text"
                id="username"
                name="username"
                className="peer bg-transparent h-10 w-full rounded-md text-gray-200 placeholder-transparent px-2 pr-8 border-gray-500 focus:border-primary-blue focus:outline-none border-2"
                placeholder="Type inside me"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <label
                htmlFor="username"
                className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-primary-blue peer-focus:text-sm transition-all"
              >
                your name
              </label>
              {!validateStatus.name && (
                <small className="absolute right-2 top-3  text-red-600">
                  *Required
                </small>
              )}
            </div>

            {/* Email */}
            <div className="relative bg-secondary-black grow">
              <input
                type="email"
                id="email"
                name="email"
                className="peer bg-transparent h-10 w-full rounded-md text-gray-200 placeholder-transparent px-2 pr-8 border-gray-500 focus:border-primary-blue focus:outline-none border-2"
                placeholder="Type inside me"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <label
                htmlFor="email"
                className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-secondary-black mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-primary-blue peer-focus:text-sm transition-all"
              >
                Email
              </label>
              {!validateStatus.email && (
                <small className="absolute right-2 top-3  text-red-600">
                  *Required
                </small>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="relative bg-seconday-black mx-4 my-8">
            <input
              type="text"
              id="subject"
              name="subject"
              className="peer bg-transparent h-10 w-full rounded-md text-gray-200 placeholder-transparent px-2 pr-8 border-gray-500 focus:border-primary-blue focus:outline-none border-2"
              placeholder="Type inside me"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, subject: e.target.value }))
              }
            />
            <label
              htmlFor="subject"
              className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-secondary-black mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-primary-blue peer-focus:text-sm transition-all"
            >
              Subject
            </label>
            {!validateStatus.subject && (
              <small className="absolute right-2 top-3  text-red-600">
                *Required
              </small>
            )}
          </div>

          {/* Message */}
          <div className="relative bg-secondary-black mx-4 my-8">
            <textarea
              type="text"
              id="message"
              name="message"
              className="peer bg-transparent h-36 w-full rounded-md text-gray-200 placeholder-transparent border-2 px-2 border-gray-500 focus:border-primary-blue focus:outline-none"
              placeholder="Type inside me"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
            />
            <label
              htmlFor="message"
              className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-secondary-black mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-primary-blue peer-focus:text-sm transition-all"
            >
              Message
            </label>
            {!validateStatus.message && (
              <small className="absolute right-2 top-3  text-red-600">
                *Required
              </small>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <button
              className="group [transform:translateZ(0)] w-48 px-6 py-3 m-4 rounded-lg overflow-hidden bg-gray-200 relative before:absolute before:bg-primary-blue before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[8] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500"
              onClick={(e) => submit(e)}
            >
              <span className="relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500">
                Send
              </span>
            </button>
          </div>
        </form>
      </div>

      {checkModal && (
        <div className="w-screen h-screen fixed left-0 top-0 flex flex-col justify-center items-center drop-shadow-sm z-20">
          {/* Content */}
          <div className="flex flex-col items-center text-white bg-secondary-light p-8 z-10 rounded-sm">
            <h3 className="text-2xl">Mail has been sent.</h3>
            <br />
            <input
              type="button"
              value="Close"
              className="bg-white text-black text-sm px-4 py-1 rounded-sm hover:cursor-pointer hover:bg-gray-200 duration-200"
              onClick={checkToggle}
            />
          </div>
          {/* Black Background */}
          <div className="w-screen h-screen bg-black opacity-80 absolute"></div>
        </div>
      )}
    </div>
  );
}

export default ContactMe;
