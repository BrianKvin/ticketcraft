// Event-related type definitions

export const RegistrationField = {
  id: String,
  name: String,
  type: String, // 'text', 'email', 'phone', 'textarea', 'select'
  label: String,
  required: Boolean,
  placeholder: String,
  options: Array, // for select fields
};

export const RegistrationData = {
  // Dynamic object with field names as keys
  [String]: String,
};

export const PaymentSummary = {
  subtotal: Number,
  fees: Number,
  total: Number,
  currency: String,
};

export const Event = {
  id: String,
  title: String,
  date: String,
  location: String,
  description: String,
  image: String,
  price: Number,
  category: String,
  availableSlots: Number,
  totalSlots: Number,
  organizer: String,
  registrationFields: Array, // Array of RegistrationField
}; 