/* eslint-disable class-methods-use-this */
class Utils {
  getInitials(firstName, lastName) {
    return `${firstName.charAt(0).toUpperCase()} ${lastName.charAt(0).toUpperCase()}`;
  }
}

export default new Utils();
