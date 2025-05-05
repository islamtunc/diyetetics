// Bismillahirrahmanirahim

"use client";

import { useSession } from "@/app/(main)/SessionProvider";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useSubmitPostMutation } from "./mutations";
import "./styles.css";
import useMediaUpload, { Attachment } from "./useMediaUpload";

export default function PostEditor() {
  const { user } = useSession();

  const mutation = useSubmitPostMutation();

  const {
    startUpload,
    attachments,
    isUploading,
    uploadProgress,
    removeAttachment,
    reset: resetMediaUploads,
  } = useMediaUpload();

  const [nav, setTitle] = useState("");
  const [naverok, setDescription] = useState("");
  const [sirove, setContent] = useState("");
  const [mmmcategory, setCategory] = useState("");
  const [mmmtags, setTags] = useState("");

  function onSubmit() {
    mutation.mutate(
      {
       
        content: [nav, naverok,sirove,mmmcategory,mmmtags].join("\n\n"),
      // Etiketleri virgülle ayır
        mediaIds: attachments.map((a) => a.mediaId).filter(Boolean) as string[],
      },
      {
        onSuccess: () => {
          setTitle("");
          setDescription("");
          setContent("");
          setCategory("");
          setTags("");
          resetMediaUploads();
        },
      }
    );
  }

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex gap-5">
        <UserAvatar avatarUrl={user.avatarUrl} className="hidden sm:inline" />
        <div className="w-full">
          {/* Başlık */}
          <input
            type="text"
            placeholder="Başlık"
            value={nav}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-2xl bg-background px-5 py-3 mb-3"
          />

          {/* Açıklama */}
          <input
            type="text"
            placeholder="Açıklama"
            value={naverok}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-2xl bg-background px-5 py-3 mb-3"
          />

          {/* İçerik */}
          <textarea
            placeholder="İçerik"
            value={sirove}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-2xl bg-background px-5 py-3 mb-3"
            rows={5}
          />

          {/* Kategori */}
          <input
            type="text"
            placeholder="Kategori"
            value={mmmcategory}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-2xl bg-background px-5 py-3 mb-3"
          />

          {/* Etiketler */}
          <input
            type="text"
            placeholder="Etiketler (virgülle ayırın)"
            value={mmmtags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full rounded-2xl bg-background px-5 py-3"
          />
        </div>
      </div>

      {!!attachments.length && (
        <AttachmentPreviews
          attachments={attachments}
          removeAttachment={removeAttachment}
        />
      )}

      <div className="flex items-center justify-end gap-3">
        {isUploading && (
          <>
            <span className="text-sm">{uploadProgress ?? 0}%</span>
          </>
        )}
        <AddAttachmentsButton
          onFilesSelected={startUpload}
          disabled={isUploading || attachments.length >= 5}
        />
        <LoadingButton
          onClick={onSubmit}
          loading={mutation.isPending}
          disabled={
            !nav.trim() ||
            !naverok.trim() ||
            !sirove.trim() ||
            !mmmcategory.trim() ||
            isUploading
          }
          className="min-w-20"
        >
          Yayınla
        </LoadingButton>
      </div>
    </div>
  );
}

interface AddAttachmentsButtonProps {
  onFilesSelected: (files: File[]) => void;
  disabled: boolean;
}

function AddAttachmentsButton({
  onFilesSelected,
  disabled,
}: AddAttachmentsButtonProps) {
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
        <span>Dosya Ekle</span>
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

interface AttachmentPreviewsProps {
  attachments: Attachment[];
  removeAttachment: (fileName: string) => void;
}

function AttachmentPreviews({
  attachments,
  removeAttachment,
}: AttachmentPreviewsProps) {
  return (
    <div className="flex flex-col gap-3">
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

interface AttachmentPreviewProps {
  attachment: Attachment;
  onRemoveClick: () => void;
}

function AttachmentPreview({
  attachment: { file, mediaId, isUploading },
  onRemoveClick,
}: AttachmentPreviewProps) {
  const src = URL.createObjectURL(file);

  return (
    <div className="relative mx-auto size-fit">
      {file.type.startsWith("image") ? (
        <img
          src={src}
          alt="Attachment preview"
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
          className="absolute right-3 top-3 rounded-full bg-foreground p-1.5 text-background transition-colors hover:bg-foreground/60"
        >
          Kaldır
        </button>
      )}
    </div>
  );
}