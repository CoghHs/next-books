import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./index.module.css";

export default function IndexPage({ results }) {
  const router = useRouter();
  const onClick = (list_name_encoded, list_name) => {
    router.push(
      {
        pathname: `/list/${list_name_encoded}`,
        query: {
          list_name_encoded,
          list_name,
        },
      },
      `/list/${list_name_encoded}`
    );
  };
  return (
    <>
      <div className={styles.bookWrapper}>
        {results?.map((i) => (
          <div className={styles.bookList}>
            <Link key={i.list_name} href={`/list/${i.list_name_encoded}`}>
              <div
                className={styles.bookListItem}
                onClick={() => onClick(i.list_name_encoded)}
              >
                {i.list_name} &rarr;
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/lists`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
