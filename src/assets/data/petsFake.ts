import { Pet, Roles } from "@/interfaces";

export const pets: Pet[] = [
    {
      id: "a180ec3b-e659-4bfe-9b8a-ef1d0e078dc2",
      name: "Nala",
      slug: "nala",
      adopted: true,
      sterilized: true,
      vacine: false,
      race: "criollo",
      type: {
        id: "89df5caa-fe45-4e74-a8e7-f9e7ea8ca8ca",
        type: "perro",
        status: true
      },
      sex: {
        id: "1b6fdda2-738c-42b0-ab5b-b7b6a4acb80b",
        sex: "hembra",
        status: true
      },
      size: {
        id: "1722636d-140c-4c5f-a290-bf6c492f5734",
        size: "mediano",
        status: true
      },
      stage: {
        id: "54a369be-9f9d-4918-a245-c8a406508f3b",
        stage: "cachorro (1 a 12 meses)",
        status: true
      },
      user: {
        id: "47e8dc58-1d2b-4fca-a245-cd851c3b2ee3",
        name: "Sebastián",
        lastname: "Meneses",
        email: "smeneses@gmail.com",
        phone: "3012589642",
        roles: [Roles.superAdmin],
        isActive: true
      },
      images: [
        "/pets/nala.png"
      ]
    },
    {
      id: "da96d0a8-46e0-49bc-8b7c-510637d67d20",
      name: "Dante",
      slug: "dante",
      adopted: false,
      sterilized: true,
      vacine: true,
      race: "pincher",
      type: {
        id: "89df5caa-fe45-4e74-a8e7-f9e7ea8ca8ca",
        type: "perro",
        status: true
      },
      sex: {
        id: "1b6fdda2-738c-42b0-ab5b-b7b6a4acb80b",
        sex: "macho",
        status: true
      },
      size: {
        id: "1722636d-140c-4c5f-a290-bf6c492f5734",
        size: "pequeño",
        status: true
      },
      stage: {
        id: "54a369be-9f9d-4918-a245-c8a406508f3b",
        stage: "cachorro (1 a 12 meses)",
        status: true
      },
      user: {
        id: "47e8dc58-1d2b-4fca-a245-cd851c3b2ee3",
        name: "Sebastián",
        lastname: "Meneses",
        email: "smeneses@gmail.com",
        phone: "3012589642",
        roles: [
          
        ],
        isActive: true
      },
      images: [
        "/pets/dante.png",
      ]
    },
    {
      id: "81750e67-3b94-4ed3-a9b8-85b50720062e",
      name: "Lucas",
      slug: "lucas",
      adopted: true,
      sterilized: false,
      vacine: false,
      race: "Bengalí",
      type: {
        id: "89df5caa-fe45-4e74-a8e7-f9e7ea8ca8ca",
        type: "perro",
        status: true
      },
      sex: {
        id: "1b6fdda2-738c-42b0-ab5b-b7b6a4acb80b",
        sex: "macho",
        status: true
      },
      size: {
        id: "1722636d-140c-4c5f-a290-bf6c492f5734",
        size: "grande",
        status: true
      },
      stage: {
        id: "54a369be-9f9d-4918-a245-c8a406508f3b",
        stage: "cachorro (1 a 12 meses)",
        status: true
      },
      user: {
        id: "47e8dc58-1d2b-4fca-a245-cd851c3b2ee3",
        name: "Sebastián",
        lastname: "Meneses",
        email: "smeneses@gmail.com",
        phone: "3012589642",
        roles: [
          Roles.superAdmin
        ],
        isActive: true
      },
      images: [
        "/pets/lucas.png",
      ]
    },
    {
      id: "52825c2b-12fc-4018-91b0-2c758e951fc5",
      name: "Luna",
      slug: "luna",
      adopted: false,
      sterilized: false,
      vacine: true,
      race: "Labrador",
      type: {
        id: "89df5caa-fe45-4e74-a8e7-f9e7ea8ca8ca",
        type: "perro",
        status: true
      },
      sex: {
        id: "1b6fdda2-738c-42b0-ab5b-b7b6a4acb80b",
        sex: "hembra",
        status: true
      },
      size: {
        id: "1722636d-140c-4c5f-a290-bf6c492f5734",
        size: "grande",
        status: true
      },
      stage: {
        id: "54a369be-9f9d-4918-a245-c8a406508f3b",
        stage: "cachorro (1 a 12 meses)",
        status: true
      },
      user: {
        id: "47e8dc58-1d2b-4fca-a245-cd851c3b2ee3",
        name: "Sebastián",
        lastname: "Meneses",
        email: "smeneses@gmail.com",
        phone: "3012589642",
        roles: [
          Roles.superAdmin
        ],
        isActive: true
      },
      images: [
        "/pets/luna.png",
      ]
    },
    {
      id: "ab786897-fd74-4247-ae51-fa61b9295d23",
      name: "Bruno",
      slug: "bruno",
      adopted: true,
      sterilized: true,
      vacine: true,
      race: "Criollo",
      type: {
        id: "89df5caa-fe45-4e74-a8e7-f9e7ea8ca8ca",
        type: "perro",
        status: true
      },
      sex: {
        id: "1b6fdda2-738c-42b0-ab5b-b7b6a4acb80b",
        sex: "macho",
        status: true
      },
      size: {
        id: "1722636d-140c-4c5f-a290-bf6c492f5734",
        size: "grande",
        status: true
      },
      stage: {
        id: "54a369be-9f9d-4918-a245-c8a406508f3b",
        stage: "cachorro (1 a 12 meses)",
        status: true
      },
      user: {
        id: "47e8dc58-1d2b-4fca-a245-cd851c3b2ee3",
        name: "Sebastián",
        lastname: "Meneses",
        email: "smeneses@gmail.com",
        phone: "3012589642",
        roles: [
          Roles.superAdmin
        ],
        isActive: true
      },
      images: [
        "/pets/bruno.png",
      ]
    },
    {
      id: "21010915-ac7c-4429-83dc-cdbb1da30f96",
      name: "Sasha",
      slug: "sasha",
      adopted: true,
      sterilized: true,
      vacine: true,
      race: "Pitbull",
      type: {
        id: "89df5caa-fe45-4e74-a8e7-f9e7ea8ca8ca",
        type: "perro",
        status: true
      },
      sex: {
        id: "1b6fdda2-738c-42b0-ab5b-b7b6a4acb80b",
        sex: "macho",
        status: true
      },
      size: {
        id: "1722636d-140c-4c5f-a290-bf6c492f5734",
        size: "mediano",
        status: true
      },
      stage: {
        id: "54a369be-9f9d-4918-a245-c8a406508f3b",
        stage: "cachorro (1 a 12 meses)",
        status: true
      },
      user: {
        id: "47e8dc58-1d2b-4fca-a245-cd851c3b2ee3",
        name: "Sebastián",
        lastname: "Meneses",
        email: "smeneses@gmail.com",
        phone: "3012589642",
        roles: [
          Roles.superAdmin
        ],
        isActive: true
      },
      images: [
        "/pets/sasha.png",
      ]
    }
  ]