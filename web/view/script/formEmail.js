class ObjectValues {
  static getValues() {
    const userName = document.getElementById(`nome`);
    const userMessage = document.getElementById(`conteudo`);
    const emailUser = document.getElementById(`email`);
    return JSON.stringify({
      name: userName.value.trim(),
      email: emailUser.value.trim(),
      message: userMessage.value.trim(),
    });
  }
}

class SendEmailRequest extends ObjectValues {
  static async sendEmail() {
   
    
    try {
      const sendEmailRequest = await fetch(`http://localhost:9090/sendEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: SendEmailRequest.getValues(),
      });
      if (sendEmailRequest.ok) {
        return Alerts.alertSucess(
          ` Operação Concluída com Sucesso!`, 
          `O seu e-mail foi enviado com êxito. Tudo está em perfeito andamento!`
      );
      
      }
      const data = await sendEmailRequest.json();

      
      const {msg} = data
      
      
      Alerts.alertErr(`error`, `erro ao enviar email.`, msg)
    } catch (error) {
      console.log(error);
      
      Alerts.alertErr(`error`, `erro ao enviar email.`, error.message)
    }
  }
}



class btnSendEmail extends SendEmailRequest {
  static btn() {
    const btnSend = document.getElementById("btnSendEmail");
    btnSend.addEventListener("click", (e) => {
      e.preventDefault();
      SendEmailRequest.sendEmail()


    });
  }
}


document.addEventListener("DOMContentLoaded", () => {
  btnSendEmail.btn();
});

