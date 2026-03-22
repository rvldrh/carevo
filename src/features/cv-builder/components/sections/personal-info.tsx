export function PersonalInfoForm() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="bg-blue-400 text-white rounded-t-xl px-4 py-3 font-medium">
        Informasi pribadi
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="Nama Depan"
            className="border rounded-lg px-3 py-2 text-sm"
            defaultValue="Bagas"
          />
          <input
            placeholder="Nama Belakang"
            className="border rounded-lg px-3 py-2 text-sm"
            defaultValue="Kara"
          />
        </div>

        <textarea
          placeholder="Alamat"
          className="border rounded-lg px-3 py-2 text-sm"
          defaultValue="Malang, Jawa Timur"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="Email"
            className="border rounded-lg px-3 py-2 text-sm"
            defaultValue="bagas@gmail.com"
          />
          <input
            placeholder="No HP"
            className="border rounded-lg px-3 py-2 text-sm"
            defaultValue="08213xxxx"
          />
        </div>

        <input
          placeholder="Website"
          className="border rounded-lg px-3 py-2 text-sm"
        />

        <textarea
          placeholder="Profil"
          className="border rounded-lg px-3 py-2 text-sm h-32"
        />
      </div>

      <div className="flex justify-between gap-4 pt-4">
        <button className="w-full bg-gray-400 text-white py-2 rounded-xl">
          Batalkan
        </button>
        <button className="w-full bg-blue-400 text-white py-2 rounded-xl">
          Tambahkan
        </button>
      </div>
    </div>
  );
}