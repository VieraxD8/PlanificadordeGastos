import { ReactNode } from "react"

type ErrorMenssageProps = {

    children: ReactNode
}

export default function ErrorMenssage({children} : ErrorMenssageProps) {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
        {children}
    </p>
  )
}
