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