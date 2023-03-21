const genPass = (length) => {
  let chars = `AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVv0123456789~!@#$%^&*()_-+={[}]|\:;"'<,>.?/`;
  let pass = "";

  for (let i = 0; i <= length - 1; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length - 1));
  }
};

genPass(15);
