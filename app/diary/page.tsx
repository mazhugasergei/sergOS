import Link from "@/components/Link"

export default function Page() {
  const moments = ["Test moment"]

  return (
    <section>
      <h1>Diary</h1>
      <ul>
        {moments.map((title, i) => (
          <li key={`${i}_${title}`}>
            <Link href={`/diary/${title.toLowerCase().replace(/\s+/g, "-")}`} className="block">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
