export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <td className="relative overflow-hidden whitespace-nowrap py-5 pl-6 ">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-12 rounded bg-gray-100"></div>
        </div>
      </td>
      <td className="whitespace-nowrap py-3">
        <div className="h-6 w-12 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-36 rounded bg-gray-100"></div>
      </td>
    </tr>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="py-5 font-medium sm:pl-6">
                  First Name
                </th>
                <th scope="col" className="py-5 font-medium">
                  Last Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                    User Title
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                 Unique User ID
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
