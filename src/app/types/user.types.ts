export interface UserFormValues {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPassword: string;
}

export interface UserProps {
  onSubmit: (data: UserFormValues) => void;
  onBack: () => void;
}
