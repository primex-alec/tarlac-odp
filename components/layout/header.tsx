"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = Cookies.get("authToken")
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = async () => {
    try {
      // Call Laravel logout endpoint to invalidate token
      const token = Cookies.get("authToken")
      if (token) {
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        })
      }
    } catch (err) {
      console.error("Logout API failed", err)
    }

    // Clear cookies/localStorage
    Cookies.remove("authToken")
    Cookies.remove("userRole")
    localStorage.removeItem("authToken")
    localStorage.removeItem("userRole")

    setIsLoggedIn(false)
    router.push("/") // redirect to home
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg">
            <img src="/logo/tarlac-seal.png" alt="Tarlac Seal" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-foreground">Tarlac Open Data Portal</p>
            <p className="text-xs text-muted-foreground">Provincial Government of Tarlac</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link href="/datasets"><Button variant="ghost" className="text-sm">Datasets</Button></Link>
          <Link href="/categories"><Button variant="ghost" className="text-sm">Categories</Button></Link>
          <Link href="/map"><Button variant="ghost" className="text-sm">Maps</Button></Link>
          <Link href="/about"><Button variant="ghost" className="text-sm">About</Button></Link>
          <Link href="/contribute"><Button variant="ghost" className="text-sm">Contribute</Button></Link>

          {/* 🔑 Auth Button */}
          {isLoggedIn ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="text-sm bg-red-600 hover:bg-red-700 text-white">
                  Logout
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to log out? You’ll need to sign in again to submit contributions or access the dashboard.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Yes, Logout
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <Link href="/login">
              <Button className="text-sm bg-green-600 hover:bg-green-700 text-white">
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
