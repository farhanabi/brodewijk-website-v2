export default class User {
  constructor(
    email = '',
    username = '',
    first_name = '',
    last_name = '',
    phone_number = '',
  ) {
    this.email = email
    this.username = username;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone_number = phone_number;
  }
}
