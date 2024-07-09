// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   flexRender,
//   getCoreRowModel,
//   getPaginationRowModel,
//   getFilteredRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTrigger,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";
// import { MdErrorOutline } from "react-icons/md";
// import { Switch } from "@/components/ui/switch";
// import UpdateForm from "./updateForm";

// export function DataTable() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [columnFilters, setColumnFilters] = useState([]);
//   const [name, setName] = useState("");
//   const [slug, setSlug] = useState("");
//   const [userId, setUserId] = useState("");
//   const [errors, setErrors] = useState({});
//   const [users, setUsers] = useState([]);
//   const [updateFormState, setUpdateFormState] = useState(false);
//   const [selectedResto, setSelectedResto] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/api/restos");
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [users, data]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/api/users");
//         setUsers(response.data.users);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleDeleteResto = async (restoId) => {
//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/restos/${restoId}`);
//       setData((prevData) => prevData.filter((resto) => resto.id !== restoId));
//     } catch (error) {
//       console.error("Error deleting resto:", error);
//       setErrors({ general: "Failed to delete resto" });
//     }
//   };

//   const handleAddResto = async () => {
//     const newErrors = {};

//     if (!name) newErrors.name = "Name is required";
//     if (!slug) newErrors.slug = "Slug is required";
//     if (!userId) newErrors.userId = "User ID is required";

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) {
//       return;
//     }

//     const newResto = {
//       name,
//       slug,
//       user_id: userId,
//     };

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/restos",
//         newResto,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 201) {
//         setData((prevData) => [...prevData, response.data]);
//         setName("");
//         setSlug("");
//         setUserId("");
//         setErrors({});
//       } else {
//         throw new Error("Network response was not ok");
//       }
//     } catch (error) {
//       console.error("Error adding resto:", error);
//       setErrors({ general: "Failed to add resto" });
//     }
//   };

//   const columns = [
//     {
//       accessorKey: "name",
//       header: "NAME",
//     },
//     {
//       accessorKey: "slug",
//       header: "Slug",
//     },
//     {
//       accessorKey: "user.username",
//       header: "User",
//     },
//     {
//       accessorKey: "status",
//       header: "Status",
//       cell: ({ row }) => {
//         const [isActive, setIsActive] = useState(
//           row.getValue("status") === "active"
//         );

//         const handleToggleChange = async () => {
//           const newStatus = isActive ? "inactive" : "active";
//           setIsActive(!isActive);
//           try {
//             await axios.put(
//               `http://127.0.0.1:8000/api/hundelRestoStatus/${row.original.id}`,
//               { status: newStatus }
//             );
//             setData((prevData) =>
//               prevData.map((resto) =>
//                 resto.id === row.original.id
//                   ? { ...resto, status: newStatus }
//                   : resto
//               )
//             );
//           } catch (error) {
//             console.error("Error updating status:", error);
//           }
//         };

//         return (
//           <div className="capitalize">
//             <Switch onClick={handleToggleChange} checked={isActive} />
//           </div>
//         );
//       },
//     },
//     {
//       id: "actions",
//       cell: ({ row }) => {
//         return (
//           <div className="flex gap-2">
//             <Button
//               onClick={() => {
//                 setSelectedResto(row.original);
//                 setUpdateFormState(true);
//               }}
//             >
//               <BiSolidEdit size={20} />
//             </Button>
//             <Dialog className="items-center justify-center">
//               <DialogTrigger asChild>
//                 <Button variant="outline" className="bg-black">
//                   <BiSolidTrash size={20} />
//                 </Button>
//               </DialogTrigger>

//               <DialogContent className="sm:max-w-[425px] items-center justify-center">
//                 <DialogHeader className="items-center justify-center">
//                   <MdErrorOutline size={80} />
//                   <DialogTitle className="flex items-center text-[1.7rem]">
//                     Are you sure?
//                   </DialogTitle>
//                 </DialogHeader>
//                 <div className="grid gap-4 py-4">
//                   <div className="grid grid-cols-2 items-center gap-4">
//                     <Button onClick={() => handleDeleteResto(row.original.id)}>
//                       Yes
//                     </Button>
//                     <Button>No</Button>
//                   </div>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>
//         );
//       },
//     },
//   ];

//   const table = useReactTable({
//     data,
//     columns,
//     initialState: {
//       pagination: {
//         pageIndex: 0,
//         pageSize: 4,
//       },
//     },
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     onColumnFiltersChange: setColumnFilters,
//     getFilteredRowModel: getFilteredRowModel(),
//     state: {
//       columnFilters,
//     },
//   });

//   return (
//     <>
//       <div className="flex items-center py-4 justify-between pr-4 border-b-[1px]">
//         <div className="flex items-center gap-10 w-5/12">
//           <Input
//             placeholder="Filter Names..."
//             value={table.getColumn("name")?.getFilterValue() ?? ""}
//             onChange={(event) =>
//               table.getColumn("name")?.setFilterValue(event.target.value)
//             }
//             className="max-w-sm border-solid outline-none"
//           />
//         </div>
//         <div className="flex justify-between gap-3">
//           <Dialog>
//             <DialogTrigger>
//               <Button
//                 variant="ghost"
//                 className="relative rounded-md bg-black text-white"
//               >
//                 Add a Resto
//               </Button>
//             </DialogTrigger>
//             <DialogContent>
//               <DialogHeader>
//                 <h2 className="text-2xl font-bold mb-4 text-center">
//                   Create a resto
//                 </h2>
//                 <div className="flex flex-col gap-4">
//                   <Input
//                     type="text"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full mt-2 mb-4 p-2 border rounded"
//                   />
//                   {errors.name && <p className="text-red-500">{errors.name}</p>}

//                   <Input
//                     type="text"
//                     placeholder="Slug"
//                     value={slug}
//                     onChange={(e) => setSlug(e.target.value)}
//                     className="w-full mt-2 mb-4 p-2 border rounded"
//                   />
//                   {errors.slug && <p className="text-red-500">{errors.slug}</p>}

//                   <Select
//                     value={userId}
//                     onValueChange={(value) => setUserId(value)}
//                   >
//                     <SelectTrigger className="w-full">
//                       <SelectValue placeholder="Select an Owner" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectGroup>
//                         <SelectLabel>Select Owner...</SelectLabel>
//                         {users.map((user) => (
//                           <SelectItem key={user.id} value={user.id}>
//                             {user.username}
//                           </SelectItem>
//                         ))}
//                       </SelectGroup>
//                     </SelectContent>
//                   </Select>
//                   {errors.userId && (
//                     <p className="text-red-500">{errors.userId}</p>
//                   )}
//                 </div>
//                 <div className="flex justify-end gap-2 mt-4">
//                   <Button
//                     onClick={handleAddResto}
//                     className="border px-4 py-2 rounded bg-black text-white hover:bg-zinc-600 transition duration-500"
//                   >
//                     Confirm
//                   </Button>
//                   <Button
//                     onClick={() => setErrors({})}
//                     className="border px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-800 transition duration-500"
//                   >
//                     Cancel
//                   </Button>
//                 </div>
//               </DialogHeader>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableHead key={column.accessorKey || column.id}>
//                   {column.header}
//                 </TableHead>
//               ))}
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       <div className="flex items-center justify-between px-2">
//         <div className="flex items-center space-x-2">
//           <p className="text-sm font-medium">Rows per page</p>
//           <Select
//             value={`${table.getState().pagination.pageSize}`}
//             onValueChange={(value) => {
//               table.setPageSize(Number(value));
//             }}
//           >
//             <SelectTrigger className="h-8 w-[70px]">
//               <SelectValue placeholder={table.getState().pagination.pageSize} />
//             </SelectTrigger>
//             <SelectContent side="top">
//               {[2, 5, 10, 15, 20].map((pageSize) => (
//                 <SelectItem key={pageSize} value={`${pageSize}`}>
//                   {pageSize}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="flex items-center space-x-6 lg:space-x-8">
//           <div className="flex w-[100px] items-center justify-center text-sm font-medium">
//             Page {table.getState().pagination.pageIndex + 1} of{" "}
//             {table.getPageCount()}
//           </div>

//           <div className="flex items-center justify-end space-x-2 py-4">
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => table.previousPage()}
//               disabled={!table.getCanPreviousPage()}
//               className="bg-zinc-600"
//             >
//               Previous
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => table.nextPage()}
//               disabled={!table.getCanNextPage()}
//               className="bg-black"
//             >
//               Next
//             </Button>
//           </div>
//         </div>
//       </div>

//       {updateFormState && (
//         <UpdateForm
//           updateFormState={updateFormState}
//           setUpdateFormState={setUpdateFormState}
//           restoData={selectedResto}
//           users={users}
//           onUpdate={fetchData}
//         />
//       )}
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";
import { Switch } from "@/components/ui/switch";
import UpdateForm from "./updateForm";

export function DataTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [columnFilters, setColumnFilters] = useState([]);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [userId, setUserId] = useState("");
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const [updateFormState, setUpdateFormState] = useState(false);
  const [selectedResto, setSelectedResto] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://backend.garista.com/api/restos"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/users");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteResto = async (restoId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/restos/${restoId}`);
      setData((prevData) => prevData.filter((resto) => resto.id !== restoId));
    } catch (error) {
      console.error("Error deleting resto:", error);
      setErrors({ general: "Failed to delete resto" });
    }
  };

  const handleAddResto = async () => {
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!slug) newErrors.slug = "Slug is required";
    if (!userId) newErrors.userId = "User ID is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Check if the slug already exists in the current data
    const slugExists = data.some((resto) => resto.slug === slug);
    if (slugExists) {
      setErrors({ slug: "Slug already exists" });
      return;
    }

    const newResto = {
      name,
      slug,
      user_id: userId,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/restos",
        newResto,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setData((prevData) => [...prevData, response.data]);
        setName("");
        setSlug("");
        setUserId("");
        setErrors({});
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error adding resto:", error);
      setErrors({ general: "Failed to add resto" });
    }
  };

  const columns = [
    {
      accessorKey: "name",
      header: "NAME",
    },
    {
      accessorKey: "slug",
      header: "Slug",
    },
    {
      accessorKey: "user.username",
      header: "User",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const [isActive, setIsActive] = useState(
          row.getValue("status") === "active"
        );

        const handleToggleChange = async () => {
          const newStatus = isActive ? "inactive" : "active";
          setIsActive(!isActive);
          try {
            await axios.put(
              `http://127.0.0.1:8000/api/hundelRestoStatus/${row.original.id}`,
              { status: newStatus }
            );
            setData((prevData) =>
              prevData.map((resto) =>
                resto.id === row.original.id
                  ? { ...resto, status: newStatus }
                  : resto
              )
            );
          } catch (error) {
            console.error("Error updating status:", error);
          }
        };

        return (
          <div className="capitalize">
            <Switch onClick={handleToggleChange} checked={isActive} />
          </div>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Button
              onClick={() => {
                setSelectedResto(row.original);
                setUpdateFormState(true);
              }}
            >
              <BiSolidEdit size={20} />
            </Button>
            <Dialog className="items-center justify-center">
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-black">
                  <BiSolidTrash size={20} />
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[425px] items-center justify-center">
                <DialogHeader className="items-center justify-center">
                  <MdErrorOutline size={80} />
                  <DialogTitle className="flex items-center text-[1.7rem]">
                    Are you sure?
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 items-center gap-4">
                    <Button onClick={() => handleDeleteResto(row.original.id)}>
                      Yes
                    </Button>
                    <Button>No</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 4,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <>
      <div className="flex items-center py-4 justify-between pr-4 border-b-[1px]">
        <div className="flex items-center gap-10 w-5/12">
          <Input
            placeholder="Filter Names..."
            value={table.getColumn("name")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm border-solid outline-none"
          />
        </div>
        <div className="flex justify-between gap-3">
          <Dialog>
            <DialogTrigger>
              <Button
                variant="ghost"
                className="relative rounded-md bg-black text-white"
              >
                Add a Resto
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Create a resto
                </h2>
                <div className="flex flex-col gap-4">
                  <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mt-2 mb-4 p-2 border rounded"
                  />
                  {errors.name && <p className="text-red-500">{errors.name}</p>}

                  <Input
                    type="text"
                    placeholder="Slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full mt-2 mb-4 p-2 border rounded"
                  />
                  {errors.slug && <p className="text-red-500">{errors.slug}</p>}

                  <Select
                    value={userId}
                    onValueChange={(value) => setUserId(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an Owner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select Owner...</SelectLabel>
                        {users.map((user) => (
                          <SelectItem key={user.id} value={user.id}>
                            {user.username}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.userId && (
                    <p className="text-red-500">{errors.userId}</p>
                  )}
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button
                    onClick={handleAddResto}
                    className="border px-4 py-2 rounded bg-black text-white hover:bg-zinc-600 transition duration-500"
                  >
                    Confirm
                  </Button>
                  <Button
                    onClick={() => setErrors({})}
                    className="border px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-800 transition duration-500"
                  >
                    Cancel
                  </Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.accessorKey || column.id}>
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between px-2">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[2, 5, 10, 15, 20].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>

          <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="bg-zinc-600"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="bg-black"
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      {updateFormState && (
        <UpdateForm
          updateFormState={updateFormState}
          setUpdateFormState={setUpdateFormState}
          restoData={selectedResto}
          users={users}
          onUpdate={fetchData}
        />
      )}
    </>
  );
}
