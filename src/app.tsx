import "@wukla/react/styles.css";

import { DocumentEditor } from "@wukla/react";

import { document } from "./document";

export function App() {
  return (
    <DocumentEditor.Root document={document}>
      <DocumentEditor.Canvas
        position="fixed"
        inset="0"
        height="100vh"
        width="100vw"
      />

      <DocumentEditor.SideBar.Root
        onSave={(data) => {
          console.log("onSave", data);
        }}
        onSend={(id) => {
          console.log("onSend", id);
        }}
        top="4"
        right="4"
        maxHeight="600px"
        maxWidth="400px"
        position="fixed"
        className="shadow-2xl bg-white rounded-lg border border-gray-200"
      />
    </DocumentEditor.Root>
  );
}
