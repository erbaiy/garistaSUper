import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function UpdateForm({
  updateFormState,
  setUpdateFormState,
  restoData,
  users,
  onUpdate,
}) {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (restoData) {
      setName(restoData.name || "");
      setSlug(restoData.slug || "");
      setSelectedUserId(restoData.userId || "");
    }
  }, [restoData]);

  const handleUpdateResto = async () => {
    let validationErrors = {};

    if (!name) {
      validationErrors.name = "Name is required";
    }

    if (!slug) {
      validationErrors.slug = "Slug is required";
    }

    if (!selectedUserId) {
      validationErrors.userId = "User ID is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!restoData || !restoData.id) {
      console.error("Error: restoData is missing or does not have an id.");
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/restos/${restoData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            slug,
            user_id: selectedUserId,
          }),
        }
      );
      console.log("the id of user is ", selectedUserId);

      if (!response.ok) {
        throw new Error("Failed to update resto");
      }

      // Get the updated resto data from the response
      const updatedResto = await response.json();
      console.log("Resto updated:", updatedResto);

      // Call the onUpdate callback with the updated resto data
      if (onUpdate) {
        onUpdate(updatedResto);
      }

      setUpdateFormState(false);
    } catch (error) {
      console.error("Error updating resto:", error);
      // Handle error appropriately in the UI
    }
  };

  const closeDialog = () => {
    setUpdateFormState(false);
  };

  return (
    <Dialog open={updateFormState} onOpenChange={setUpdateFormState}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-2xl font-bold mb-4 text-center">Edit Resto</h2>
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

            <Select value={selectedUserId} onValueChange={setSelectedUserId}>
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
            {errors.userId && <p className="text-red-500">{errors.userId}</p>}
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button
              onClick={handleUpdateResto}
              className="border px-4 py-2 rounded bg-black text-white hover:bg-zinc-600 transition duration-500"
            >
              Confirm
            </Button>
            <Button
              onClick={closeDialog}
              className="border px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-800 transition duration-500"
            >
              Cancel
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
