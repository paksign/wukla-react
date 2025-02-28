import {
  Document,
  DocumentFieldType,
  DocumentStatus,
  SignerVerificationType,
} from "./types/graphql";

export const document: Document = {
  createdAt: "2024-02-21T06:12:02.866Z",
  data: {
    stampDuty: null,
  },
  fields: [
    {
      height: 24,
      id: "d3z7qiahqrt7on5r06nk7vjf",
      label: "Name",
      page: 1,
      recipientId: "ywbt57af9opsluml61nqglqg",
      type: DocumentFieldType.Name,
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
      type: DocumentFieldType.Date,
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
      type: DocumentFieldType.Signature,
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
      type: DocumentFieldType.Text,
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
  people: 0,
  recipients: [
    {
      email: "ali@example.com",
      id: "ywbt57af9opsluml61nqglqg",
      name: "Ali Zahid",
      phone: null,
      verification: SignerVerificationType.None,
    },
  ],
  signed: null,
  signedUrl: null,
  signers: [],
  source: "/document.pdf",
  sourceUrl: "/document.pdf",
  status: DocumentStatus.Draft,
  title: "Document",
  updatedAt: "2024-02-21T06:12:02.866Z",
};
