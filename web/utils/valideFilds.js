export default class ValideFilds {
  static valideData(data) {
    const objectValue = Object.values(data);
    const filterValueDiferent = objectValue.filter((char) => char !== ``);

    if (filterValueDiferent.length !== objectValue.length) {
      throw new Error("preencha todos os campos");
    }
  }

  static validateEmail(email) {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!regex.test(email)) {
      throw new Error(  "O e-mail informado não é válido. Por favor, insira um e-mail correto." );
    }
  }
}
