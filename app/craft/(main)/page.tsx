import Link from "@/components/Link"
import Moment from "@/components/Moment"

export default function Page() {
  const pages = ["Test page"]

  return (
    <Moment>
      <h1>Craft</h1>
      <section>
        <ul>
          {pages.map((title, i) => (
            <li key={`${i}_${title}`}>
              <p>
                <Link href={`/craft/${title.toLowerCase().replace(/\s+/g, "-")}`} className="block">
                  {title}
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </Moment>
  )
}
