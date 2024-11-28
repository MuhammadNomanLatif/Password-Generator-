import React, { useState } from "react";

const usePasswordGenrator = () => {
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const genratePassword = (checkBoxData, length) => {
    let charset = "",
      genratedPassword = "";
    const selectedOption = checkBoxData.filter((checkbox) => checkbox.state);
    if (selectedOption.length === 0) {
      setErrorMessage("Select At Least One Option");
      setPassword("");
      return;
    }
    selectedOption.forEach((element) => {
      switch (element.title) {
        case "include Uppercase Latters":
          charset += "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
          break;
        case "include Lowercase Latters":
          charset += "abcdefghijklmnopqurstuvwxyz";
          break;
        case "include Numbers":
          charset += "0123456789";
          break;
        case "include Symbols":
          charset += "!@#$%^&*()";
          break;
      }
    });
    for (let index = 0; index < length; index++) {
      const rendomIndex = Math.floor(Math.random() * charset.length);
      genratedPassword += charset[rendomIndex];
    }
    setPassword(genratedPassword);
    setErrorMessage("");
  };
  return { password, errorMessage, genratePassword };
};

export default usePasswordGenrator;
