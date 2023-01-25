const PASSWORD_RULES: { message: string; pattern: RegExp }[] = [
  { message: "Have at least one uppercase letter", pattern: /[A-Z]/ },
  { message: "Have at least one lowercase letter", pattern: /[a-z]/ },
  { message: "Have at least one number", pattern: /\d/ },
  {
    message: "Have at least one special character (!@#$...etc)",
    pattern: /[^(a-zA-z\w\s)]/,
  },
  { message: "Longer than 8 characters", pattern: /.{8,}/ },
];
export { PASSWORD_RULES };
