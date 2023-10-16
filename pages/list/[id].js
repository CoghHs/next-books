import Link from "next/link";
import styles from "./detail.module.css";

export default function Detail({ results }) {
  console.log(results);
  return (
    <>
      <div className={styles.DetailTitle}>
        <h1>{results.list_name}</h1>
      </div>
      <div className={styles.DetailWrapper}>
        {results.books.map((book) => (
          <div key={book.rank} className={styles.DetailWrap}>
            {book.book_image ? (
              <img
                className={styles.DetailImg}
                src={book.book_image}
                alt="Book Cover"
              />
            ) : (
              <img
                className={styles.DetailImg}
                src="https://storage.googleapis.com/du-prd/books/images/9780525954996.jpg" // 대체 이미지의 경로
                alt="No Image Available"
              />
            )}
            <div className={styles.DetailInfo}>
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>
            </div>
            <div className={styles.DetailBtn}>
              {book.amazon_product_url && (
                <Link href={book.amazon_product_url}>
                  <div className={styles.DetailBtnItem}>Buy Now &rarr;</div>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { results } = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
