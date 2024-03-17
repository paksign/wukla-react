import "@wukla/react/styles.css";

import { DocumentEditor } from "@wukla/react";

import { document } from "./document";

export function App() {
  return (
    <DocumentEditor.Root document={document}>
      <div className="flex gap-4 p-4">
        <DocumentEditor.Canvas className="fixed inset-0 h-screen w-screen" />

        <DocumentEditor.SideBar
          onSubmit={(data) => {
            console.log("onSubmit", data);
          }}
          onSend={(id) => {
            console.log("onSend", id);
          }}
          className="fixed shadow-2xl right-4 top-4 max-h-[600px] bg-white rounded-lg border border-gray-200"
        />
      </div>
    </DocumentEditor.Root>
  );
}
