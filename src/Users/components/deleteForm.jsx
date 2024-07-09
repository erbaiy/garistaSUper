import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MdErrorOutline } from "react-icons/md";
import { Button } from "@/components/ui/button";

function DeleteForm({
  deleteFormState,
  setDeleteFormState,
  userId,
  onDeleteSuccess,
  handleDeleteUser,
}) {
  return (
    <Dialog
      className="items-center justify-center"
      open={deleteFormState}
      onOpenChange={setDeleteFormState}
    >
      <DialogContent className="sm:max-w-[425px] items-center justify-center">
        <DialogHeader className="items-center justify-center">
          <MdErrorOutline size={80} />
          <DialogTitle className="flex items-center text-[1.7rem]">
            Are you sure?
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <Button onClick={() => handleDeleteUser(userId)}>Yes</Button>
            <Button onClick={() => setDeleteFormState(false)}>No</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteForm;
