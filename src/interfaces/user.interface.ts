import { Roles } from "./role.interface";
import { Pet } from "./pet.interface";

export interface User {
  id:       string;
  name:     string;
  lastname: string;
  email:    string;
  phone:    string;
  roles:    Roles[];
  isActive: boolean;
  pets?:     Pet[];
}

export interface UserTable extends Omit<User, 'roles'> {
  roles: string;
}

export interface UserForm extends Omit<User, 'id' | 'roles' | 'pets'> {
  id?:   string;
  roles: string;
  password?: string;
}

export interface UserLogin {
  id:       string;
  email:    string;
  token:    string;
  roles:    Roles[];
}