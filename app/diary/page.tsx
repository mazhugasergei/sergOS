import Link from "@/components/Link"
import Moment from "@/components/Moment"

export default function Page() {
  const moments = ["Test moment"]

  return (
    <Moment>
      <h1>Diary</h1>
      <section>
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
    </Moment>
  )
}
