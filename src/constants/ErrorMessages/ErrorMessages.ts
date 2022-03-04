import { BeforeOrAfterType, iInvalidDateRangeHandler } from "./types";

export const required = (field: string): string => `${field} harus diisi`;
export const numberOnly = (field: string): string =>
  `${field} hanya boleh menggunakan angka`;
export const minimumValue = (min: number, field: string): string =>
  `${field} tidak boleh kurang dari ${min}`;
export const noInternet = () => "Tidak ada koneksi Internet";
export const invalid = (field: string): string => `${field} tidak valid`;
export const invalidDateRange: iInvalidDateRangeHandler = (
  field: string,
  beforeOrAfter: BeforeOrAfterType,
  date: string
): string => `${field} must be ${beforeOrAfter} ${date}`;
export const networkError = () => "No internet connection.";
