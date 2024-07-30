import { User } from "./user.interface";

export interface Pet {
  id:         string;
  name:       string;
  slug:       string;
  adopted:    boolean;
  sterilized: boolean;
  vacine:     boolean;
  race:       string;
  type:       Type;
  sex:        Sex;
  size:       Size;
  stage:      Stage;
  user?:       User;
  images:     string[];
}

export interface PetTable extends Omit<Pet, 'user' | 'images' | 'type' | 'sex' | 'size' | 'stage'> {
  type:   string;
  sex:    string;
  size:   string;
  stage:  string;
  images?: string[];
}

export interface Sex {
  id:     string;
  sex:    string;
  status: boolean;
}

export interface Size {
  id:     string;
  size:   string;
  status: boolean;
}

export interface Stage {
  id:     string;
  stage:  string;
  status: boolean;
}

export interface Type {
  id:     string;
  type:   string;
  status: boolean;
}