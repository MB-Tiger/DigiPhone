const validate = (userData) => {
  const errors = {};

  if (!userData.name.trim()) {
    errors.name = "User Name required";
  } else {
    delete errors.name;
  }
  if (!userData.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.name;
  }
  if (!userData.password) {
    errors.password = "Password required";
  } else if (userData.password.length < 6) {
    errors.password = "Password need to be 6 character or more";
  } else {
    delete errors.password;
  }
  if (!userData.confirmPassword) {
    errors.confirmPassword = "Confirm the password";
  } else if (userData.confirmPassword !== userData.password) {
    errors.password = "Password do not match";
  } else {
    delete errors.confirmPassword;
  }
  if (userData.isAccepted === true) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = "Accept our regulations";
  }

  return errors;
};

export default validate;
