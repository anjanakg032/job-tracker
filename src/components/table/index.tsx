import { MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Application = {
  id: number
  appliedDate: string // YYYY-MM-DD
  role: string
  company: string
  notes: string
  status: "Applied" | "Interview" | "Offer" | "Rejected" | "Ghosted"
}

const applications: Application[] = [
  {
    id: 1,
    appliedDate: "2026-10-01",
    role: "Frontend Developer",
    company: "Zoho",
    notes: "Referred by a former colleague",
    status: "Interview",
  },
  {
    id: 2,
    appliedDate: "2026-10-03",
    role: "React Engineer",
    company: "Razorpay",
    notes: "Cold application, no reply yet",
    status: "Applied",
  },
  {
    id: 3,
    appliedDate: "2026-10-05",
    role: "Full Stack Developer",
    company: "Freshworks",
    notes: "Cleared the coding round",
    status: "Interview",
  },
  {
    id: 4,
    appliedDate: "2026-10-08",
    role: "UI Engineer",
    company: "Swiggy",
    notes: "Rejected after the first call",
    status: "Rejected",
  },
  {
    id: 5,
    appliedDate: "2026-10-10",
    role: "Software Engineer",
    company: "Postman",
    notes: "Offer received, salary talk pending",
    status: "Offer",
  },
  {
    id: 6,
    appliedDate: "2026-09-20",
    role: "Frontend Developer",
    company: "CRED",
    notes: "No response after 3 weeks",
    status: "Ghosted",
  },
]

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function RowActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8">
          <MoreHorizontalIcon />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function TableActions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Applied Date</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Notes</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((app) => (
          <TableRow key={app.id}>
            <TableCell>{formatDate(app.appliedDate)}</TableCell>
            <TableCell className="font-medium">{app.role}</TableCell>
            <TableCell>{app.company}</TableCell>
            <TableCell className="max-w-64 truncate">{app.notes}</TableCell>
            <TableCell>{app.status}</TableCell>
            <TableCell className="text-right">
              <RowActions />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}