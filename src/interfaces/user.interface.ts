import { Roles } from "./role.interface";

export interface User {
  id:       string;
  name:     string;
  lastname: string;
  email:    string;
  phone:    string;
  roles:    Roles[];
  isActive: boolean;
}

export interface UserTable extends Omit<User, 'roles'> {
  roles: string;
}

export interface UserForm extends Omit<User, 'id' | 'roles'> {
  id?: string;
  roles: string;
}

export interface UserLogin {
  id:       string;
  email:    string;
  token:    string;
}