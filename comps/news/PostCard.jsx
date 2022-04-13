import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { grpahCMSImageLoader } from "../../util";
import styles from "../../styles/news.module.scss";
import { useEffect, useState } from "react";
function PostCard({ post }) {
  const [excerpt, setExcerpt] = useState(post.node.excerpt);
  useEffect(() => {
    if (excerpt.length > 80) {
      setExcerpt(excerpt.slice(0, 80) + "...");
    }
  }, [excerpt]);

  return (
    <div className={styles.PostCard}>
      {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        className="shadow-lg rounded-t-lg lg:rounded-lg"
        layout="fill"
        src={post.featuredImage.url}
      />
    </div> */}
      <div className={styles.imageContainer}>
        <img src={post.node.featuredImage.url} alt="" />
      </div>

      <h1 className={styles.titleContainer}>
        <Link href={`/news/${post.node.slug}`}>{post.node.title}</Link>
      </h1>
      <div className={styles.postInfoContainer}>
        <div className={styles.authorContainer}>
          <Image
            unoptimized
            loader={grpahCMSImageLoader}
            alt={post.node.author.name}
            height="30px"
            width="30px"
            src={post.node.author.photo.url}
          />
          <p className={styles.author}>{post.node.author.name}</p>
        </div>
        <div className={styles.dateContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.node.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className={styles.excerpt}>{excerpt}</p>
      <div className={styles.detailsLinkContainer}>
        <Link href={`/post/${post.node.slug}`}>
          <span>Continue Reading</span>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
