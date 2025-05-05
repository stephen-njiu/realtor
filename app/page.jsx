import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <div className="text-3xl underline">Welcome</div>
      <Link href="/properties?name-test ">Go To Properties</Link>
    </div>
  )
}

export default HomePage