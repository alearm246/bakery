import emailjs from "emailjs-com";

class Notifications {
  constructor() { }

  async sendEmail(input) {
    try {
      await emailjs.sendForm("service_i33yhp2", "template_b6p4v7s", input, "5FI_1E8CdaQLYKeIL");
    } catch(err) {
      console.error(err);
    }
  }
}

export default new Notifications();;
