import { Pet, Roles } from "@/interfaces";

export const pets: Pet[] = [
    {
      id: "a180ec3b-e659-4bfe-9b8a-ef1d0e078dc2",
      name: "Charlie",
      slug: "charlie",
      adopted: true,
      sterilized: true,
      vacine: false,
      race: "Labrador",
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
        roles: [Roles.superAdmin],
        isActive: true
      },
      images: [
        "charlie2.jpg",
        "charlie1.jpg"
      ]
    },
    {
      id: "da96d0a8-46e0-49bc-8b7c-510637d67d20",
      name: "Lola",
      slug: "lola",
      adopted: false,
      sterilized: true,
      vacine: true,
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
        "lola2.jpg",
        "lola1.jpg"
      ]
    },
    {
      id: "81750e67-3b94-4ed3-a9b8-85b50720062e",
      name: "Buddy",
      slug: "buddy",
      adopted: true,
      sterilized: false,
      vacine: false,
      race: "Beagle",
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
          Roles.superAdmin
        ],
        isActive: true
      },
      images: [
        "buddy2.jpg",
        "buddy1.jpg"
      ]
    },
    {
      id: "52825c2b-12fc-4018-91b0-2c758e951fc5",
      name: "Mia",
      slug: "mia",
      adopted: false,
      sterilized: false,
      vacine: true,
      race: "Maine Coon",
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
          Roles.superAdmin
        ],
        isActive: true
      },
      images: [
        "mia2.jpg",
        "mia1.jpg"
      ]
    },
    {
      id: "ab786897-fd74-4247-ae51-fa61b9295d23",
      name: "Simba",
      slug: "simba",
      adopted: true,
      sterilized: true,
      vacine: true,
      race: "Persa",
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
          Roles.superAdmin
        ],
        isActive: true
      },
      images: [
        "simba2.jpg",
        "simba1.jpg"
      ]
    },
    {
      id: "21010915-ac7c-4429-83dc-cdbb1da30f96",
      name: "Coco",
      slug: "coco",
      adopted: true,
      sterilized: true,
      vacine: true,
      race: "Labrador",
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
          Roles.superAdmin
        ],
        isActive: true
      },
      images: [
        "coco2.jpg",
        "coco1.jpg"
      ]
    },
    {
      id: "779bc4f8-6658-4e1f-b808-ff708361e3f1",
      name: "Bella",
      slug: "bella",
      adopted: false,
      sterilized: true,
      vacine: false,
      race: "Persa",
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
          Roles.superAdmin
        ],
        isActive: true
      },
      images: [
        "bella2.jpg",
        "bella1.jpg"
      ]
    },
    {
      id: "5c88458d-96fb-422c-af63-31a62ac57f57",
      name: "Luna",
      slug: "luna",
      adopted: true,
      sterilized: true,
      vacine: true,
      race: "Siamés",
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
          Roles.superAdmin
        ],
        isActive: true
      },
      images: [
        "luna2.jpg",
        "luna1.jpg"
      ]
    },
    {
      id: "271491ed-dc18-4313-8b28-a7e9e1ba3a80",
      name: "Rocky",
      slug: "rocky",
      adopted: true,
      sterilized: false,
      vacine: true,
      race: "Bulldog",
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
          Roles.superAdmin
        ],
        isActive: true
      },
      images: [
        "rocky2.jpg",
        "rocky1.jpg"
      ]
    },
    {
      id: "f7f1e042-6d1b-4c3b-9492-1d7e530d6f4a",
      name: "Max",
      slug: "max",
      adopted: false,
      sterilized: true,
      vacine: true,
      race: "Golden Retriever",
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
          Roles.superAdmin
        ],
        isActive: true
      },
      images: [
        "max2.jpg",
        "max1.jpg"
      ]
    }
  ]