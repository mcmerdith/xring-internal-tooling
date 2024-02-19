"use client";

export default function ProductEditor() {
  return (
    <main className="flex flex-col items-start gap-4 p-24">
      <h1 className="w-full text-center text-4xl">
        <b>CSV Product Editor</b>
      </h1>
      <label className="text-2xl" htmlFor="file-upload">
        Upload File
      </label>
      <input id="file-upload" type="file" />
      <hr className="w-full" />
    </main>
  );
}
