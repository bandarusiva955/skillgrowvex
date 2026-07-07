"use client";

import { useCallback, useRef, useState } from "react";
import { Upload, FileText, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileDropzoneProps {
  accept?: string;
  maxSizeMb?: number;
  label?: string;
  hint?: string;
  disabled?: boolean;
  uploading?: boolean;
  currentFileName?: string | null;
  onFileSelect: (file: File) => void;
  onClear?: () => void;
}

export function FileDropzone({
  accept = ".pdf,.doc,.docx",
  maxSizeMb = 10,
  label = "Drag & drop your file here",
  hint = "or click to browse",
  disabled = false,
  uploading = false,
  currentFileName,
  onFileSelect,
  onClear,
}: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");

  const validateAndSelect = useCallback(
    (file: File) => {
      setError("");
      if (file.size > maxSizeMb * 1024 * 1024) {
        setError(`File must be under ${maxSizeMb}MB`);
        return;
      }
      onFileSelect(file);
    },
    [maxSizeMb, onFileSelect]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      if (disabled || uploading) return;
      const file = e.dataTransfer.files?.[0];
      if (file) validateAndSelect(file);
    },
    [disabled, uploading, validateAndSelect]
  );

  return (
    <div className="space-y-2">
      {currentFileName ? (
        <div className="flex items-center justify-between rounded-lg border border-navy-200 bg-navy-50 px-4 py-3">
          <div className="flex items-center gap-3 min-w-0">
            <FileText className="h-5 w-5 shrink-0 text-brand-gold" />
            <span className="truncate text-sm font-medium text-brand-navy">
              {currentFileName}
            </span>
          </div>
          {onClear && !uploading && (
            <button
              type="button"
              onClick={onClear}
              className="rounded p-1 text-navy-400 hover:bg-navy-100 hover:text-navy-600"
              aria-label="Remove file"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
          }}
          onClick={() => !disabled && !uploading && inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            if (!disabled && !uploading) setDragging(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setDragging(false);
          }}
          onDrop={handleDrop}
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors",
            dragging
              ? "border-brand-gold bg-gold-50"
              : "border-navy-200 bg-white hover:border-brand-gold hover:bg-gold-50/50",
            (disabled || uploading) && "cursor-not-allowed opacity-60"
          )}
        >
          {uploading ? (
            <Loader2 className="mb-3 h-10 w-10 animate-spin text-brand-gold" />
          ) : (
            <Upload className="mb-3 h-10 w-10 text-navy-400" />
          )}
          <p className="text-sm font-medium text-brand-navy">{label}</p>
          <p className="mt-1 text-xs text-navy-500">{hint}</p>
          <p className="mt-3 text-xs text-navy-400">
            PDF, DOC, DOCX · Max {maxSizeMb}MB
          </p>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept={accept}
        disabled={disabled || uploading}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) validateAndSelect(file);
          e.target.value = "";
        }}
      />

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
