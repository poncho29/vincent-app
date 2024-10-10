import { MdEditSquare, MdError } from "react-icons/md";
import { IoLayers } from "react-icons/io5";

import { getUsers } from "@/actions";

import { PageContent } from "@/components/layout";
import { ButtonLink } from "@/components/common";
import { TableSSR } from "@/components/tables";

import { ButtonDeleteUser } from "./components";
import { Column, User, UserTable } from "@/interfaces";

const usersColumns: Column<UserTable>[] = [
  {
    header: 'Nombre',
    accessor: 'name'
  },
  {
    header: 'Apellido',
    accessor: 'lastname'
  },
  {
    header: 'Correo',
    accessor: 'email',
    capitalize: false
  },
  {
    header: 'Telefono',
    accessor: 'phone'
  },
  {
    header: 'Roles',
    accessor: 'roles',
    capitalize: false
  },
  {
    header: 'Estado',
    accessor: 'isActive'
  }
];

interface Props {
  searchParams: {
    limit?: number;
    page?: number;
  };
}

export default async function UsersPage({ searchParams }: Props) {
  const page = searchParams.page ? Number(searchParams.page) : 1;

  const { users, totalPages, errorMessage } = await getUsers({ page });

  const dataTable: UserTable[] = users.map((user: User) => ({
    ...user,
    roles: user.roles.join(', '),
  }))

  return (
    <PageContent
      pageName="Usuarios"
      pageIcon={<IoLayers size={24} className="text-blackLight" />}
    >
      {errorMessage ? (
        <div className="h-52 flex flex-col items-center justify-center gap-2">
          <MdError size={44} />
          <p>{errorMessage}</p>
        </div>
      ) : (
        <TableSSR
          data={dataTable}
          columns={usersColumns}
          btnCreate={{
            href: '/admin/usuarios/crear',
            text: 'Crear usuario',
            textMobile: 'Crear'
          }}
          // searcher={
          //   <SearchTable />
          // }
          pagination={{totalPages}}
          controls={(item) => {
            return (
            <>
              <ButtonLink
                showIcon={false}
                className={`flex items-center gap-2 !bg-yellow-500 hover:!bg-yellow-600`}
                href={`/admin/usuarios/editar/${item.id}`}
              >
                { <MdEditSquare size={20} /> }
                <span className="text-xs lg:text-base">
                  Editar
                </span>
              </ButtonLink>
  
              <ButtonDeleteUser
                id={item.id || ''}
                isActive={item.isActive}
                text={item.isActive ? 'Inactivar' : 'Activar'}
              />
            </>
          )}}
        />
      )}

    </PageContent>
  );
}