import "@wukla/react/styles.css";

import { DocumentEditor } from "@wukla/react/editor";
import { useMeasure } from "react-use";

export function App() {
  const [ref, { height, width }] = useMeasure<HTMLDivElement>();

  return (
    <DocumentEditor.Root
      document={{
        createdAt: "2024-02-21T06:12:02.866Z",
        fields: [
          {
            height: 24,
            id: "d3z7qiahqrt7on5r06nk7vjf",
            label: "Name",
            page: 1,
            recipientId: "ywbt57af9opsluml61nqglqg",
            type: "name",
            width: 144,
            x: 0.2,
            y: 0.4,
          },
          {
            height: 24,
            id: "y10c2dhc2rqysr5c3txhmatd",
            label: "Date",
            page: 1,
            recipientId: "ywbt57af9opsluml61nqglqg",
            type: "date",
            width: 120,
            x: 0.2,
            y: 0.5,
          },
          {
            height: 64,
            id: "d3cpje10zwbyo0kf6ztoxz5l",
            label: "Signature",
            page: 2,
            recipientId: "ywbt57af9opsluml61nqglqg",
            type: "signature",
            width: 128,
            x: 0.2,
            y: 0.4,
          },
          {
            height: 64,
            id: "chk5uuutbl0thk5bnhn1ntf8",
            label: "Do you agree?",
            page: 2,
            recipientId: "ywbt57af9opsluml61nqglqg",
            type: "text",
            width: 144,
            x: 0.2,
            y: 0.6,
          },
        ],
        id: "mudap0t44k8brfm36coypz6v",
        meta: {
          defaultFontSize: 14,
          ordered: false,
          signatureFontSize: 24,
          textFontSize: 12,
        },
        pages: [
          {
            height: 1684,
            number: 1,
            path: "/page-1.jpg",
            url: "/page-1.jpg",
            width: 1190,
          },
          {
            height: 1190,
            number: 2,
            path: "/page-2.jpg",
            url: "/page-2.jpg",
            width: 1684,
          },
        ],
        recipients: [
          {
            email: "ali@example.com",
            id: "ywbt57af9opsluml61nqglqg",
            name: "Ali Zahid",
            phone: null,
            verification: "none",
          },
        ],
        signed: null,
        signedUrl: null,
        signers: 0,
        source: "/document.pdf",
        sourceUrl: "/document.pdf",
        status: "draft",
        title: "Document",
        updatedAt: "2024-02-21T06:12:02.866Z",
      }}
    >
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
