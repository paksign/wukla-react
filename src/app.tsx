import "@wukla/react/styles.css";

import { DocumentEditor } from "@wukla/react/editor";
import { useMeasure } from "react-use";

import { document } from "./document";

export function App() {
  const [ref, { height, width }] = useMeasure<HTMLDivElement>();

  return (
    <DocumentEditor.Root document={document}>
      <div className="flex gap-4 p-4">
        <div className="fixed inset-0 h-screen w-screen" ref={ref}>
          {height > 0 ? (
            <DocumentEditor.Canvas
              dimensions={{
                height,
                width,
              }}
            />
          ) : null}
        </div>

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
