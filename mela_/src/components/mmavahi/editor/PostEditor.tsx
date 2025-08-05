// Bismillahirahmanirahim 
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SuphanAllah, Elhamdulillah, Allahu Ekber



"use client";

import { useSession } from "@/app/(main)/SessionProvider";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";
import { cn } from "@/lib/utils";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useDropzone } from "@uploadthing/react";
import { ImageIcon, Loader2, X } from "lucide-react";
import Image from "next/image";
import { ClipboardEvent, useRef, useState } from "react";
import { useSubmitPostMutation } from "./mutations";
import "./styles.css";
import useMediaUpload, { Attachment } from "./useMediaUpload";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Heading from "@tiptap/extension-heading";

export default function PostEditor() {
  const { user } = useSession();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");

  const mutation = useSubmitPostMutation();

  const {
    startUpload,
    attachments,
    isUploading,
    uploadProgress,
    removeAttachment,
    reset: resetMediaUploads,
  } = useMediaUpload();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: startUpload,
  });

  const { onClick, ...rootProps } = getRootProps();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ bold: {}, italic: false }),
      Placeholder.configure({ placeholder: "Yazınızı buraya yazın..." }),
      TextStyle,
      Color,
      Heading.configure({ levels: [1, 2, 3] }), // Başlık seviyeleri
    ],
  });

  const description =
    editor?.getText({ blockSeparator: "\n" }) || "";

  function onPaste(e: ClipboardEvent<HTMLInputElement>) {
    const files = Array.from(e.clipboardData.items)
      .filter((item) => item.kind === "file")
      .map((item) => item.getAsFile()) as File[];
    startUpload(files);
  }

  function onSubmit() {
    mutation.mutate(
      {
        content: [
          title.trim(),
          address.trim(),
          ...description
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line.length > 0),
        ],
        mediaIds: attachments.map((a) => a.mediaId).filter(Boolean) as string[],
      },
      {
        onSuccess: () => {
          setTitle("");
          setAddress("");
          editor?.commands.clearContent();
          resetMediaUploads();
        },
      }
    );
  }

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-card p-3 sm:p-5 shadow-sm text-black w-full max-w-2xl mx-auto">
      {/* Renk ve başlık araç çubuğu */}
      <div className="flex gap-2 mb-2">
        <select
          onChange={e => {
            editor?.chain().focus().setColor(e.target.value).run();
          }}
          defaultValue=""
          className="border rounded px-2 py-1"
        >
          <option value="">Renk seç</option>
          <option value="#000000">Siyah</option>
          <option value="#e11d48">Kırmızı</option>
          <option value="#16a34a">Yeşil</option>
          <option value="#2563eb">Mavi</option>
          <option value="#f59e42">Turuncu</option>
          <option value="#fbbf24">Sarı</option>
          <option value="#a21caf">Mor</option>
        </select>
        <button
          type="button"
          className="border rounded px-2 py-1"
          onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
        >
          H1
        </button>
        <button
          type="button"
          className="border rounded px-2 py-1"
          onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          H2
        </button>
        <button
          type="button"
          className="border rounded px-2 py-1"
          onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          H3
        </button>
      </div>
      <div {...rootProps} className="w-full">
        <EditorContent
          editor={editor}
          className={cn(
            "max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-3 py-3 text-black prose prose-green", // prose ekle
            isDragActive && "outline-dashed",
          )}
          onPaste={onPaste}
        />
        <input {...getInputProps()} />
      </div>
      {!!attachments.length && (
        <AttachmentPreviews
          attachments={attachments}
          removeAttachment={removeAttachment}
        />
      )}
      <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
        {isUploading && (
          <>
            <span className="text-sm">{uploadProgress ?? 0}%</span>
            <Loader2 className="size-5 animate-spin text-primary" />
          </>
        )}
        <AddAttachmentsButton
          onFilesSelected={startUpload}
          disabled={isUploading || attachments.length >= 10}
        />
        <LoadingButton
          onClick={onSubmit}
          loading={mutation.isPending}
          disabled={
            !title.trim() || !address.trim() || !description.trim() || isUploading
          }
          className="min-w-20"
        >
           Yayınla
        </LoadingButton>
      </div>
    </div>
  );
}

function AddAttachmentsButton({
  onFilesSelected,
  disabled,
}: {
  onFilesSelected: (files: File[]) => void;
  disabled: boolean;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-primary hover:text-primary"
        disabled={disabled}
        onClick={() => fileInputRef.current?.click()}
      >
        <ImageIcon size={20} />
      </Button>
      <input
        type="file"
        accept="image/*, video/*"
        multiple
        ref={fileInputRef}
        className="sr-only hidden"
        onChange={(e) => {
          const files = Array.from(e.target.files || []);
          if (files.length) {
            onFilesSelected(files);
            e.target.value = "";
          }
        }}
      />
    </>
  );
}

function AttachmentPreviews({
  attachments,
  removeAttachment,
}: {
  attachments: Attachment[];
  removeAttachment: (fileName: string) => void;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        attachments.length > 1 && "sm:grid sm:grid-cols-2"
      )}
    >
      {attachments.map((attachment) => (
        <AttachmentPreview
          key={attachment.file.name}
          attachment={attachment}
          onRemoveClick={() => removeAttachment(attachment.file.name)}
        />
      ))}
    </div>
  );
}

function AttachmentPreview({
  attachment: { file, mediaId, isUploading },
  onRemoveClick,
}: {
  attachment: Attachment;
  onRemoveClick: () => void;
}) {
  const src = URL.createObjectURL(file);

  return (
    <div className={cn("relative mx-auto size-fit", isUploading && "opacity-50")}>
      {file.type.startsWith("image") ? (
        <Image
          src={src}
          alt="Attachment preview"
          width={500}
          height={500}
          className="size-fit max-h-[30rem] rounded-2xl"
        />
      ) : (
        <video controls className="size-fit max-h-[30rem] rounded-2xl">
          <source src={src} type={file.type} />
        </video>
      )}
      {!isUploading && (
        <button
          onClick={onRemoveClick}
          className="absolute right-3 top-3 rounded-full bg-foreground p-1.5 text-background hover:bg-foreground/60"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
}
