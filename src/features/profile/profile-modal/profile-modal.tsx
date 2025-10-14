import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

import { UpdateProfileForm } from "../update-profile-form";

const ProfileModal = () => {
  return (
    <Dialog>
      <DialogTrigger
        className="bg-linear-to-tr from-accent to-primary/80 ring-3 ring-border/70 text-primary-foreground text-sm font-medium
       bg-[length:400%] hover:animate-gradient-xy hover:bg-[length:100%] rounded-sm h-10 px-6 cursor-pointer w-full capitalize"
      >
        Edit profile
      </DialogTrigger>
      <DialogContent className="w-full max-w-screen-xl p-4">
        <DialogHeader>
          <DialogTitle className="font-bold">Profile</DialogTitle>
          <DialogDescription>Update profile</DialogDescription>
        </DialogHeader>
        <UpdateProfileForm />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
