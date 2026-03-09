import { motion } from "framer-motion";
import ProfileMenuItem from "./profile-menu-item";

export default function ProfileMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute right-0 mt-3 w-[220px] bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <ul className="flex flex-col text-lg font-medium">

        <ProfileMenuItem label="Profile" />

        <ProfileMenuItem label="Setting" />

        <ProfileMenuItem label="Logout" danger />

      </ul>
    </motion.div>
  );
}