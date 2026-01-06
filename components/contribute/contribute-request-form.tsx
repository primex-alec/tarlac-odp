"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { LogIn, Send, Upload, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitContribution } from "@/lib/api"

const requestTypes = [
  { value: "submit_dataset", label: "Submit Dataset" },
  { value: "request_dataset", label: "Request Dataset" },
  { value: "report_issue", label: "Report Issue" },
  { value: "feedback", label: "General Feedback" },
]

type FormState = {
  name: string
  email: string
  organization: string
  requestType: string
  message: string
  file: File | null
}

const initialState: FormState = {
  name: "",
  email: "",
  organization: "",
  requestType: "",
  message: "",
  file: null,
}

export function ContributeRequestForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("authToken") : null
    if (stored) setToken(stored)
  }, [])

  const canSubmit = useMemo(() => Boolean(token), [token])

  const handleChange = (field: keyof Omit<FormState, 'file'>) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    
    if (file) {
      // Validate file size (5MB)
      const maxSize = 5 * 1024 * 1024 // 5MB in bytes
      if (file.size > maxSize) {
        setError("File size must be less than 5MB")
        event.target.value = "" // Reset input
        return
      }
      
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'text/plain',
        'text/csv',
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/bmp',
        'image/svg+xml',
        'image/webp',
        'application/zip',
        'application/x-rar-compressed',
        'application/x-7z-compressed',
        'application/x-tar',
        'application/gzip',
        'application/json',
        'application/xml',
        'text/html',
        'text/markdown',
      ]
      
      if (!allowedTypes.includes(file.type)) {
        setError("Invalid file type. Please upload a supported document, image, or archive file.")
        event.target.value = "" // Reset input
        return
      }
      
      setError(null)
    }
    
    setForm((prev) => ({ ...prev, file }))
  }

  const removeFile = () => {
    setForm((prev) => ({ ...prev, file: null }))
    // Reset file input
    const fileInput = document.getElementById('file') as HTMLInputElement
    if (fileInput) fileInput.value = ""
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!canSubmit) return

    const { organization, requestType, message, file } = form
    if (!organization.trim() || !requestType.trim() || !message.trim()) {
      setError("Organization, request type, and message are required.")
      return
    }

    if (!file) {
      setError("Please upload a file.")
      return
    }

    setError(null)
    setSuccess(null)
    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      const formData = new FormData()
      formData.append('organization', organization.trim())
      formData.append('request_type', requestType.trim())
      formData.append('message', message.trim())
      
      if (form.name.trim()) {
        formData.append('name', form.name.trim())
      }
      if (form.email.trim()) {
        formData.append('email', form.email.trim())
      }
      
      formData.append('file', file)

      await submitContribution(formData, token || undefined)
      
      setSuccess("Contribution submitted successfully. Thank you!")
      setForm(initialState)
      
      // Reset file input
      const fileInput = document.getElementById('file') as HTMLInputElement
      if (fileInput) fileInput.value = ""
      
    } catch (err) {
      const message = err instanceof Error ? err.message : "Submission failed. Please try again."
      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
            placeholder="Your full name" 
            value={form.name} 
            onChange={handleChange("name")}
            disabled={!canSubmit}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="you@example.com" 
            value={form.email} 
            onChange={handleChange("email")}
            disabled={!canSubmit}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="organization">Organization *</Label>
        <Input 
          id="organization" 
          placeholder="Your organization or agency" 
          value={form.organization} 
          onChange={handleChange("organization")}
          disabled={!canSubmit}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="type">Request Type *</Label>
        <select
          id="type"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          value={form.requestType}
          onChange={handleChange("requestType")}
          disabled={!canSubmit}
          required
        >
          <option value="">Select a type</option>
          {requestTypes.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="Describe your request or submission in detail..."
          rows={5}
          value={form.message}
          onChange={handleChange("message")}
          disabled={!canSubmit}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="file">
          Upload File *
          <span className="ml-2 text-xs text-muted-foreground">(Max 5MB)</span>
        </Label>
        
        {!form.file ? (
          <div className="relative">
            <Input
              id="file"
              type="file"
              onChange={handleFileChange}
              disabled={!canSubmit}
              className="cursor-pointer file:mr-4 file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-foreground hover:file:bg-primary/90"
              accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.jpg,.jpeg,.png,.gif,.bmp,.svg,.webp,.zip,.rar,.7z,.tar,.gz,.json,.xml,.html,.htm,.md"
              required
            />
            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Upload className="h-4 w-4" />
              <span>Supported: Documents, Images, Archives (PDF, DOC, XLS, PPT, CSV, JPG, PNG, ZIP, etc.)</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between rounded-md border border-input bg-background p-3">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-primary/10 p-2">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">{form.file.name}</span>
                <span className="text-xs text-muted-foreground">{formatFileSize(form.file.size)}</span>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={removeFile}
              disabled={!canSubmit}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {error ? (
        <div className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      {success ? (
        <div className="rounded-md border border-emerald-300/60 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          {success}
        </div>
      ) : null}

      <Button type="submit" className="w-full" disabled={!canSubmit || isSubmitting}>
        {canSubmit ? (
          isSubmitting ? (
            "Submitting..."
          ) : (
            <span className="inline-flex items-center gap-2">
              <Send className="h-4 w-4" />
              Submit Request
            </span>
          )
        ) : (
          <span className="inline-flex items-center gap-2">
            <LogIn className="h-4 w-4" />
            Sign in to submit
          </span>
        )}
      </Button>

      {!canSubmit ? (
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="rounded-full bg-secondary/40 px-3 py-2 text-xs font-medium text-foreground">
            Not signed in
          </div>
          <Link href="/login" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <LogIn className="h-4 w-4" />
            Go to login
          </Link>
        </div>
      ) : null}
    </form>
  )
}