class Alerts {
  static alertSucess(title, text){
    Swal.fire({
        title: `✅ ${title}`,
        text: text,
        icon: "success",
        background: "#f3f4f6",
        color: "#333",
        confirmButtonText: "Fechar",
        confirmButtonColor: "#16a34a",
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          confirmButton: "custom-button"
        },
        showClass: {
          popup: "animate__animated animate__fadeInUp"
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown"
        }
      });
  }


  static alertErr(icon, text, title){
    Swal.fire({
        title: title,
        text: text,
        icon: icon
      });
  }
}