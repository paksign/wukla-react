export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTimeISO: { input: string; output: string };
};

export type Activity = {
  __typename?: "Activity";
  createdAt: Scalars["DateTimeISO"]["output"];
  id: Scalars["ID"]["output"];
  reason: ActivityReason;
  user: Scalars["String"]["output"];
};

export type ActivityList = {
  __typename?: "ActivityList";
  activity: Array<Activity>;
  next: Maybe<Scalars["ID"]["output"]>;
};

export enum ActivityReason {
  DocumentCreated = "document_created",
  DocumentDownloaded = "document_downloaded",
  DocumentSent = "document_sent",
  DocumentSigned = "document_signed",
  DocumentUpdated = "document_updated",
  SignerVerified = "signer_verified",
}

export type ApiKey = {
  __typename?: "ApiKey";
  createdAt: Scalars["DateTimeISO"]["output"];
  id: Scalars["ID"]["output"];
  key: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type Asset = {
  __typename?: "Asset";
  id: Scalars["String"]["output"];
  path: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type Certificate = {
  __typename?: "Certificate";
  createdAt: Scalars["DateTimeISO"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type Document = {
  __typename?: "Document";
  createdAt: Scalars["DateTimeISO"]["output"];
  fields: Array<DocumentField>;
  id: Scalars["ID"]["output"];
  meta: DocumentMeta;
  pages: Array<DocumentPage>;
  recipients: Array<DocumentRecipient>;
  signed: Maybe<Scalars["String"]["output"]>;
  signedUrl: Maybe<Scalars["String"]["output"]>;
  signers: Scalars["Int"]["output"];
  source: Scalars["String"]["output"];
  sourceUrl: Scalars["String"]["output"];
  status: DocumentStatus;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type DocumentField = {
  __typename?: "DocumentField";
  height: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
  page: Scalars["Int"]["output"];
  recipientId: Scalars["ID"]["output"];
  type: DocumentFieldType;
  width: Scalars["Int"]["output"];
  x: Scalars["Float"]["output"];
  y: Scalars["Float"]["output"];
};

export type DocumentFieldInput = {
  height: Scalars["Int"]["input"];
  id: Scalars["ID"]["input"];
  label: Scalars["String"]["input"];
  page: Scalars["Int"]["input"];
  recipientId: Scalars["ID"]["input"];
  type: DocumentFieldType;
  width: Scalars["Int"]["input"];
  x: Scalars["Float"]["input"];
  y: Scalars["Float"]["input"];
};

export enum DocumentFieldType {
  Date = "date",
  Email = "email",
  Initials = "initials",
  Name = "name",
  Signature = "signature",
  Text = "text",
}

export type DocumentList = {
  __typename?: "DocumentList";
  documents: Array<Document>;
  next: Maybe<Scalars["ID"]["output"]>;
};

export type DocumentMeta = {
  __typename?: "DocumentMeta";
  defaultFontSize: Scalars["Int"]["output"];
  ordered: Scalars["Boolean"]["output"];
  signatureFontSize: Scalars["Int"]["output"];
  textFontSize: Scalars["Int"]["output"];
};

export type DocumentMetaInput = {
  defaultFontSize: Scalars["Int"]["input"];
  ordered: Scalars["Boolean"]["input"];
  signatureFontSize: Scalars["Int"]["input"];
  textFontSize: Scalars["Int"]["input"];
};

export type DocumentPage = {
  __typename?: "DocumentPage";
  height: Scalars["Int"]["output"];
  number: Scalars["Int"]["output"];
  path: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
  width: Scalars["Int"]["output"];
};

export type DocumentRecipient = {
  __typename?: "DocumentRecipient";
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  phone: Maybe<Scalars["String"]["output"]>;
  verification: SignerVerificationType;
};

export type DocumentRecipientInput = {
  email: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
  phone: InputMaybe<Scalars["String"]["input"]>;
  verification: SignerVerificationType;
};

export enum DocumentStatus {
  Draft = "draft",
  Processing = "processing",
  Sent = "sent",
  Signed = "signed",
}

export type Invite = {
  __typename?: "Invite";
  createdAt: Scalars["DateTimeISO"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  role: MemberRole;
  status: InviteStatus;
};

export enum InviteStatus {
  Accepted = "accepted",
  Pending = "pending",
  Rejected = "rejected",
}

export type Member = {
  __typename?: "Member";
  createdAt: Scalars["DateTimeISO"]["output"];
  id: Scalars["ID"]["output"];
  role: MemberRole;
  user: User;
};

export enum MemberRole {
  Member = "member",
  Owner = "owner",
}

export type Membership = {
  __typename?: "Membership";
  createdAt: Scalars["DateTimeISO"]["output"];
  id: Scalars["ID"]["output"];
  role: MemberRole;
  workspace: Workspace;
};

export type Mutation = {
  __typename?: "Mutation";
  acceptInvite: Workspace;
  createApiKey: ApiKey;
  createDocument: Document;
  createWorkspace: Workspace;
  deleteApiKey: Scalars["Boolean"]["output"];
  getUrlForDocumentUpload: Asset;
  getUrlForSignatureUpload: Asset;
  invitePerson: Scalars["Boolean"]["output"];
  rejectInvite: Scalars["Boolean"]["output"];
  removeMember: Scalars["Boolean"]["output"];
  revokeInvite: Scalars["Boolean"]["output"];
  sendDocument: Scalars["Boolean"]["output"];
  signDocument: Scalars["Boolean"]["output"];
  signIn: Scalars["Boolean"]["output"];
  signUp: Scalars["Boolean"]["output"];
  updateCertificate: Certificate;
  updateDocument: Document;
  updateMemberRole: Scalars["Boolean"]["output"];
  updateProfile: User;
  updateWorkspace: Workspace;
  verifySignerEmail: Scalars["Boolean"]["output"];
};

export type MutationAcceptInviteArgs = {
  inviteId: Scalars["ID"]["input"];
};

export type MutationCreateApiKeyArgs = {
  name: Scalars["String"]["input"];
  workspaceSlug: Scalars["String"]["input"];
};

export type MutationCreateDocumentArgs = {
  id: Scalars["ID"]["input"];
  source: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
  workspaceId: Scalars["ID"]["input"];
};

export type MutationCreateWorkspaceArgs = {
  name: Scalars["String"]["input"];
  slug: Scalars["String"]["input"];
};

export type MutationDeleteApiKeyArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationGetUrlForDocumentUploadArgs = {
  workspaceSlug: Scalars["String"]["input"];
};

export type MutationInvitePersonArgs = {
  email: Scalars["String"]["input"];
  role: MemberRole;
  workspaceId: Scalars["ID"]["input"];
};

export type MutationRejectInviteArgs = {
  inviteId: Scalars["ID"]["input"];
};

export type MutationRemoveMemberArgs = {
  memberId: Scalars["ID"]["input"];
  workspaceId: Scalars["ID"]["input"];
};

export type MutationRevokeInviteArgs = {
  inviteId: Scalars["ID"]["input"];
  workspaceId: Scalars["ID"]["input"];
};

export type MutationSendDocumentArgs = {
  documentId: Scalars["ID"]["input"];
  send?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationSignDocumentArgs = {
  data: Array<SignerFieldInput>;
  signerId: Scalars["ID"]["input"];
  token: Scalars["String"]["input"];
};

export type MutationSignInArgs = {
  email: Scalars["String"]["input"];
};

export type MutationSignUpArgs = {
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  timeZone?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateCertificateArgs = {
  data: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  password: InputMaybe<Scalars["String"]["input"]>;
  workspaceSlug: Scalars["String"]["input"];
};

export type MutationUpdateDocumentArgs = {
  documentId: Scalars["ID"]["input"];
  fields: Array<DocumentFieldInput>;
  meta: DocumentMetaInput;
  recipients: Array<DocumentRecipientInput>;
  title: Scalars["String"]["input"];
};

export type MutationUpdateMemberRoleArgs = {
  memberId: Scalars["ID"]["input"];
  role: MemberRole;
};

export type MutationUpdateProfileArgs = {
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  meta: UserMetaInput;
};

export type MutationUpdateWorkspaceArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
  slug: Scalars["String"]["input"];
};

export type MutationVerifySignerEmailArgs = {
  token: Scalars["String"]["input"];
};

export type PublicDocument = {
  __typename?: "PublicDocument";
  meta: DocumentMeta;
  pages: Array<DocumentPage>;
  title: Scalars["String"]["output"];
};

export type PublicSigner = {
  __typename?: "PublicSigner";
  document: PublicDocument;
  email: Scalars["String"]["output"];
  fields: Array<DocumentField>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  phone: Maybe<Scalars["String"]["output"]>;
  verification: SignerVerificationType;
  workspace: PublicWorkspace;
};

export type PublicWorkspace = {
  __typename?: "PublicWorkspace";
  image: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  activity: ActivityList;
  downloadSignedDocument: Maybe<Scalars["String"]["output"]>;
  embedDocument: Maybe<Scalars["String"]["output"]>;
  getDocument: Maybe<Document>;
  getSigner: Maybe<PublicSigner>;
  getUserInvites: Array<UserInvite>;
  getUserMemberships: Array<Membership>;
  getWorkspace: Maybe<Workspace>;
  getWorkspaceInvites: Array<Invite>;
  getWorkspaceMembers: Array<Member>;
  listApiKeys: Array<ApiKey>;
  listDocumentSigners: Array<Signer>;
  listDocuments: DocumentList;
  profile: Maybe<User>;
  verify: Verify;
};

export type QueryActivityArgs = {
  cursor: InputMaybe<Scalars["ID"]["input"]>;
  documentId: Scalars["ID"]["input"];
};

export type QueryDownloadSignedDocumentArgs = {
  token: Scalars["String"]["input"];
};

export type QueryEmbedDocumentArgs = {
  documentId: Scalars["ID"]["input"];
  headless?: InputMaybe<Scalars["Boolean"]["input"]>;
  signerId: Scalars["ID"]["input"];
};

export type QueryGetDocumentArgs = {
  documentId: Scalars["ID"]["input"];
};

export type QueryGetSignerArgs = {
  id: Scalars["ID"]["input"];
  token: Scalars["String"]["input"];
};

export type QueryGetWorkspaceArgs = {
  workspaceSlug: Scalars["String"]["input"];
};

export type QueryGetWorkspaceInvitesArgs = {
  workspaceSlug: Scalars["String"]["input"];
};

export type QueryGetWorkspaceMembersArgs = {
  workspaceSlug: Scalars["String"]["input"];
};

export type QueryListApiKeysArgs = {
  workspaceSlug: Scalars["String"]["input"];
};

export type QueryListDocumentSignersArgs = {
  documentId: Scalars["ID"]["input"];
};

export type QueryListDocumentsArgs = {
  cursor: InputMaybe<Scalars["ID"]["input"]>;
  status: InputMaybe<DocumentStatus>;
  title: InputMaybe<Scalars["String"]["input"]>;
  workspaceId: Scalars["ID"]["input"];
};

export type QueryVerifyArgs = {
  code: Scalars["String"]["input"];
};

export type Signer = {
  __typename?: "Signer";
  createdAt: Scalars["DateTimeISO"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  phone: Maybe<Scalars["String"]["output"]>;
  status: SignerStatus;
  updatedAt: Scalars["DateTimeISO"]["output"];
  verification: SignerVerificationType;
};

export type SignerFieldInput = {
  id: Scalars["ID"]["input"];
  mime: SignerFieldType;
  value: Scalars["String"]["input"];
};

export enum SignerFieldType {
  Date = "date",
  Image = "image",
  Text = "text",
}

export enum SignerStatus {
  Pending = "pending",
  Sent = "sent",
  Signed = "signed",
  Verifying = "verifying",
}

export enum SignerVerificationType {
  Email = "email",
  Identity = "identity",
  None = "none",
  Phone = "phone",
}

export type User = {
  __typename?: "User";
  createdAt: Scalars["DateTimeISO"]["output"];
  email: Scalars["String"]["output"];
  emailVerified: Scalars["Boolean"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  image: Maybe<Scalars["String"]["output"]>;
  lastName: Scalars["String"]["output"];
  meta: UserMeta;
};

export type UserInvite = {
  __typename?: "UserInvite";
  createdAt: Scalars["DateTimeISO"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  role: MemberRole;
  status: InviteStatus;
  workspace: PublicWorkspace;
};

export type UserMeta = {
  __typename?: "UserMeta";
  timeZone: Scalars["String"]["output"];
};

export type UserMetaInput = {
  timeZone: Scalars["String"]["input"];
};

export type Verify = {
  __typename?: "Verify";
  token: Scalars["String"]["output"];
  user: User;
};

export type Workspace = {
  __typename?: "Workspace";
  certificate: Maybe<Certificate>;
  createdAt: Scalars["DateTimeISO"]["output"];
  id: Scalars["ID"]["output"];
  image: Maybe<Scalars["String"]["output"]>;
  meta: WorkspaceMeta;
  name: Scalars["String"]["output"];
  role: Maybe<MemberRole>;
  slug: Scalars["String"]["output"];
};

export type WorkspaceMeta = {
  __typename?: "WorkspaceMeta";
  personal: Scalars["Boolean"]["output"];
};
