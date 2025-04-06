// utils/validation.js
import { parsePhoneNumberWithError, AsYouType } from "libphonenumber-js";

/**
 * Validates a phone number.
 * @param {string} phone - The phone number string to validate.
 * @param {string} countryCode - The country code (e.g., "US", "LB").
 * @returns {boolean} - Returns true if the phone number is valid.
 */
export function isValidPhoneNumber(phone, countryCode = "US") {
  try {
    const phoneNumber = parsePhoneNumberWithError(phone, countryCode);
    return phoneNumber.isValid();
  } catch (error) {
    console.log(error);
    return false;
  }
}

/**
 * Formats a phone number as the user types.
 * @param {string} input - Raw user input (numbers only or mixed).
 * @param {string} countryCode - Country code (e.g., "US", "LB").
 * @returns {string} - Formatted phone number.
 */
export function formatPhoneNumber(input, countryCode = "US") {
  const formatter = new AsYouType(countryCode);
  return formatter.input(input);
}

/**
 * Validates an email address.
 * @param {string} email - The email address string to validate.
 * @returns {boolean} - Returns true if the email is valid.
 */

export function isValidEmail(email) {
  // A simple email regex; you may adjust it as needed.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
