export class AppConstants {
  public static LOCAL_URL = 'http://localhost:3000';
  public static SERVER_URL = 'https://api-mini-hospital.herokuapp.com';

  public static get baseURL(): string { return this.LOCAL_URL }
}

