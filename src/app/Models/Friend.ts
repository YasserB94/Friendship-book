export interface IFriend {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  favoriteLanguage: string;
}
export class Friend implements IFriend {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  favoriteLanguage: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    favoriteLanguague: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.favoriteLanguage = favoriteLanguague;
  }
  toJson(): {} {
    return {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      phone: this.phone,
      favoritelanguage: this.favoriteLanguage,
    };
  }
}
