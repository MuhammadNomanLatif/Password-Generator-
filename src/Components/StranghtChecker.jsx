import React from "react";

const StranghtChecker = ({ password = "" }) => {
  const getPasswordStranght = () => {
    const passwordlength = password.length;
    if (passwordlength < 1) {
      return "";
    } else if (passwordlength < 4) {
      return "Very Weak";
    } else if (passwordlength < 8) {
      return "Poor";
    } else if (passwordlength < 12) {
      return "Medium";
    } else if (passwordlength < 16) {
      return "Strong";
    } else {
      return "very Strong";
    }
  };
  const passwordStranght = getPasswordStranght();
  if (!passwordStranght) return <></>;
  return (
    <div className="passwordstranth">
      Stranght<span style={{ fontWeight: "bold" }}>{passwordStranght}</span>
    </div>
  );
};

export default StranghtChecker;
